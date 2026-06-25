import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  memo,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────────── */
const VISIBLE_COUNT = 5;
const STEP_INTERVAL = 3000; // ms between advances

/**
 * Fixed desktop positions (relative to orbit container centre).
 * Layout:
 *         P3 (top-center)
 *   P2               P4
 * P1        ●        P5
 */
const DESKTOP_POSITIONS = [
  { x: -420, y: 20 },   // P1 – bottom-left
  { x: -310, y: -190 }, // P2 – top-left
  { x: 0,   y: -290 }, // P3 – top-center
  { x: 310, y: -190 }, // P4 – top-right
  { x: 420, y: 20 },   // P5 – bottom-right
];

const TABLET_POSITIONS = [
  { x: -300, y: 20 },
  { x: -220, y: -150 },
  { x: 0,   y: -220 },
  { x: 220, y: -150 },
  { x: 300, y: 20 },
];

/* ─────────────────────────────────────────────────────────────
   Connector line (SVG overlay)
───────────────────────────────────────────────────────────── */
const ConnectorLine = memo(({ fromX, fromY, toX, toY }) => (
  <motion.line
    x1={fromX}
    y1={fromY}
    x2={toX}
    y2={toY}
    stroke="#94a3b8"
    strokeWidth={1}
    strokeOpacity={0.3}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    exit={{ pathLength: 0, opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  />
));
ConnectorLine.displayName = "ConnectorLine";

/* ─────────────────────────────────────────────────────────────
   Feature Card
───────────────────────────────────────────────────────────── */
const cardVariants = {
  enter: {
    opacity: 0,
    scale: 0.75,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 28,
      duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    y: -20,
    transition: { duration: 0.7, ease: "easeIn" },
  },
};

const FeatureCard = memo(({ feature, posIndex, totalPositions }) => {
  const isCenter = posIndex === Math.floor(totalPositions / 2); // P3 (index 2)

  return (
    <motion.div
      key={feature.title}
      variants={cardVariants}
      initial="enter"
      animate="visible"
      exit="exit"
      layout
      whileHover={{
        y: -6,
        boxShadow:
          "0 24px 48px rgba(30,58,138,0.18), 0 8px 16px rgba(37,99,235,0.12)",
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      style={{
        background: isCenter
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 20,
        boxShadow:
          "0 8px 32px rgba(30,58,138,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        border: "1px solid rgba(255,255,255,0.7)",
        padding: 18,
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* shimmer accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
          borderRadius: "20px 20px 0 0",
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background:
            "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 2px 8px rgba(37,99,235,0.15)",
        }}
      >
        <img
          src={feature.icon}
          alt={feature.title}
          style={{
            width: 32,
            height: 32,
            objectFit: "contain",
            display: "block",
          }}
        />
      </motion.div>

      {/* Text */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#2563eb",
            textTransform: "uppercase",
            marginBottom: 2,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          {feature.title.split(".")[0].trim()}.
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            color: "#0f172a",
            fontFamily: "Helvetica, Arial, sans-serif",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {feature.title.replace(/^\d+\.\s*/, "")}
        </h3>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: 12,
            color: "#475569",
            fontFamily: "Helvetica, Arial, sans-serif",
            lineHeight: 1.4,
          }}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
});
FeatureCard.displayName = "FeatureCard";

/* ─────────────────────────────────────────────────────────────
   Mobile vertical timeline
───────────────────────────────────────────────────────────── */
const MobileTimeline = memo(({ visibleFeatures }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 14,
      width: "100%",
      padding: "0 16px",
    }}
  >
    <AnimatePresence mode="popLayout">
      {visibleFeatures.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
            delay: i * 0.06,
          }}
          style={{ width: "100%" }}
        >
          <FeatureCard feature={feature} posIndex={i} totalPositions={5} />
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
));
MobileTimeline.displayName = "MobileTimeline";

/* ─────────────────────────────────────────────────────────────
   Center circle
───────────────────────────────────────────────────────────── */
const breatheVariants = {
  breathe: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CenterCircle = memo(({ size }) => (
  <motion.div
    variants={breatheVariants}
    animate="breathe"
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "bold",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: size === 300 ? 22 : size === 240 ? 18 : 15,
      lineHeight: 1.2,
      textAlign: "center",
      letterSpacing: 0.5,
      boxShadow:
        "0 0 60px rgba(37,99,235,0.35), 0 0 120px rgba(30,58,138,0.20), 0 10px 30px rgba(0,0,0,0.25)",
      border: "2px solid rgba(255,255,255,0.15)",
      flexShrink: 0,
      zIndex: 10,
      position: "relative",
    }}
  >
    <span>Edutech</span>
    <span>Features</span>
    {/* inner glow ring */}
    <div
      style={{
        position: "absolute",
        inset: 8,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.12)",
        pointerEvents: "none",
      }}
    />
  </motion.div>
));
CenterCircle.displayName = "CenterCircle";

/* ─────────────────────────────────────────────────────────────
   Main orbit diagram
───────────────────────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function FeatureOrbitDiagram({ features }) {
  const [startIndex, setStartIndex] = useState(0);
  const timerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const positions = useMemo(
    () => (isTablet ? TABLET_POSITIONS : DESKTOP_POSITIONS),
    [isTablet]
  );

  const total = features.length;

  // Derive the 5 currently visible features
  const visibleFeatures = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => ({
      feature: features[(startIndex + i) % total],
      posIndex: i,
    }));
  }, [startIndex, features, total]);

  // Advance one step (anti-clockwise: start index increases)
  const advance = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    timerRef.current = setInterval(advance, STEP_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [advance, shouldReduceMotion]);

  /* ── Mobile layout ────────────────────────────────────────── */
  if (isMobile) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          padding: "10px 0 20px",
        }}
      >
        <CenterCircle size={180} />
        <MobileTimeline visibleFeatures={visibleFeatures.map((v) => v.feature)} />
      </div>
    );
  }

  /* ── Desktop / Tablet orbit layout ───────────────────────── */
  const circleSize = isDesktop ? 300 : 240;
  // Orbit container height needs enough room for all cards above/below
  const orbitH = isDesktop ? 720 : 580;
  const orbitW = isDesktop ? 1100 : 820;
  // Centre of the orbit area (where the circle sits)
  const cx = orbitW / 2;
  const cy = orbitH * 0.62; // shifted slightly down so top cards have room

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0 40px",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "relative",
          width: orbitW,
          height: orbitH,
          flexShrink: 0,
        }}
      >
        {/* SVG connector lines */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          <AnimatePresence>
            {visibleFeatures.map(({ feature, posIndex }) => {
              const pos = positions[posIndex];
              const cardW = isDesktop ? 280 : 220;
              const cardH = 90;
              // Card top-left corner
              const cardLeft = cx + pos.x - cardW / 2;
              const cardTop = cy + pos.y - cardH / 2;
              // Centre of card
              const cardCx = cardLeft + cardW / 2;
              const cardCy = cardTop + cardH / 2;
              return (
                <ConnectorLine
                  key={`line-${feature.title}`}
                  fromX={cardCx}
                  fromY={cardCy}
                  toX={cx}
                  toY={cy}
                />
              );
            })}
          </AnimatePresence>
        </svg>

        {/* Center circle */}
        <div
          style={{
            position: "absolute",
            left: cx - circleSize / 2,
            top: cy - circleSize / 2,
            zIndex: 10,
          }}
        >
          <CenterCircle size={circleSize} />
        </div>

        {/* Feature cards */}
        <AnimatePresence mode="popLayout">
          {visibleFeatures.map(({ feature, posIndex }) => {
            const pos = positions[posIndex];
            const cardW = isDesktop ? 280 : 220;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: cx + pos.x - cardW / 2,
                  y: cy + pos.y - 45,
                }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 28,
                  duration: 1.4,
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: cardW,
                  zIndex: 20,
                }}
              >
                <FeatureCard
                  feature={feature}
                  posIndex={posIndex}
                  totalPositions={VISIBLE_COUNT}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
