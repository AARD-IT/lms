import React, { memo, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  MonitorPlay,
  ClipboardCheck,
  Users,
  Upload,
  MessageCircle,
  HelpCircle,
  MessagesSquare,
  Bell,
  CalendarClock,
  CalendarDays,
  BarChart3,
  Award,
  TrendingUp,
  UsersRound,
  BookOpen,
} from "lucide-react";

type IconName =
  | "LayoutDashboard" | "MonitorPlay" | "ClipboardCheck" | "Users" | "Upload"
  | "MessageCircle" | "HelpCircle" | "MessagesSquare" | "Bell" | "CalendarClock"
  | "CalendarDays" | "BarChart3" | "Award" | "TrendingUp" | "UsersRound" | "BookOpen";

type Feature = { title: string; description: string; icon: IconName };
type VisibleItem = { id: number; feature: Feature };
type Viewport = "mobile" | "tablet" | "desktop";

const ICONS: Record<IconName, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  LayoutDashboard,
  MonitorPlay,
  ClipboardCheck,
  Users,
  Upload,
  MessageCircle,
  HelpCircle,
  MessagesSquare,
  Bell,
  CalendarClock,
  CalendarDays,
  BarChart3,
  Award,
  TrendingUp,
  UsersRound,
  BookOpen,
};

const FEATURES: Feature[] = [
  { title: "Student Dashboard", description: "Personalized learning overview with progress tracking.", icon: "LayoutDashboard" },
  { title: "Live Classes", description: "Attend instructor-led live sessions.", icon: "MonitorPlay" },
  { title: "Assignments", description: "Upload and manage assignments.", icon: "ClipboardCheck" },
  { title: "Batch Management", description: "Manage current and upcoming batches.", icon: "Users" },
  { title: "Task Submission", description: "Submit projects and monitor reviews.", icon: "Upload" },
  { title: "1-on-1 Mentorship", description: "Book personal mentor sessions.", icon: "MessageCircle" },
  { title: "FAQ Center", description: "Quick answers to common questions.", icon: "HelpCircle" },
  { title: "Chat Support", description: "Instant support from our team.", icon: "MessagesSquare" },
  { title: "Job Updates", description: "Placement alerts and openings.", icon: "Bell" },
  { title: "Upcoming Batches", description: "Future course schedules.", icon: "CalendarClock" },
  { title: "Event Calendar", description: "Track classes and deadlines.", icon: "CalendarDays" },
  { title: "Progress Dashboard", description: "Monitor learning progress.", icon: "BarChart3" },
  { title: "Certificates", description: "Download verified certificates.", icon: "Award" },
  { title: "Learning Analytics", description: "Skill insights and analytics.", icon: "TrendingUp" },
  { title: "Discussion Forum", description: "Interact with peers.", icon: "UsersRound" },
  { title: "Course Library", description: "Access learning resources anytime.", icon: "BookOpen" },
];

// Slot layout: index 0 = bottom-left (entry), 4 = bottom-right (exit)
// Positions: 1 bottom-left, 2 top-left, 3 top-center, 4 top-right, 5 bottom-right
const SLOT_POSITIONS_DESKTOP = [
  { x: -380, y: 110 },   // 1 bottom-left
  { x: -340, y: -120 },  // 2 top-left
  { x: 0,    y: -230 },  // 3 top-center
  { x: 340,  y: -120 },  // 4 top-right
  { x: 380,  y: 110 },   // 5 bottom-right
];

const SLOT_POSITIONS_TABLET = [
  { x: -290, y: 90 },
  { x: -260, y: -100 },
  { x: 0,    y: -190 },
  { x: 260,  y: -100 },
  { x: 290,  y: 90 },
];

const STEP_MS = 1500;
const ANIM_MS = 0.8;

const FeatureCard = memo(function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = ICONS[feature.icon];
  return (
    <div className="group flex items-center gap-3 rounded-[20px] bg-white p-[18px] shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 transition-transform duration-500 group-hover:rotate-12">
        {Icon ? <Icon className="h-6 w-6" strokeWidth={2.2} /> : null}
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-slate-900">{feature.title}</h3>
        <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-500">{feature.description}</p>
      </div>
    </div>
  );
});

function useStepIndex() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % FEATURES.length), STEP_MS);
    return () => clearInterval(id);
  }, []);
  return step;
}

function useViewport() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  if (w < 768) return "mobile";
  if (w < 1100) return "tablet";
  return "desktop";
}

const spring = { type: "spring" as const, stiffness: 180, damping: 26, mass: 0.9 };

function OrbitLayout({ visible, viewport }: { visible: VisibleItem[]; viewport: Viewport }) {
  const slots = viewport === "tablet" ? SLOT_POSITIONS_TABLET : SLOT_POSITIONS_DESKTOP;
  const circleSize = viewport === "tablet" ? 240 : 300;

  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-[1100px] items-center justify-center md:h-[620px]">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: circleSize * 2.2,
          height: circleSize * 2.2,
          background:
            "radial-gradient(closest-side, rgba(37,99,235,0.22), rgba(37,99,235,0.05) 60%, transparent 75%)",
        }}
      />

      {/* Connector lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="-550 -310 1100 620"
        preserveAspectRatio="xMidYMid meet"
      >
        {visible.map((item, i: number) => {
          const p = slots[i];
          const r = circleSize / 2;
          const len = Math.hypot(p.x, p.y);
          const ux = p.x / len;
          const uy = p.y / len;
          const x1 = ux * r;
          const y1 = uy * r;
          const x2 = p.x - ux * 90;
          const y2 = p.y - uy * 40;
          return (
            <motion.line
              key={item.id}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(100,116,139,0.28)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Center circle */}
      <motion.div
        className="relative z-10 flex items-center justify-center rounded-full text-white shadow-[0_20px_60px_rgba(30,58,138,0.45)]"
        style={{
          width: circleSize,
          height: circleSize,
          background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
        }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
        <div className="text-center">
          <div className="text-2xl font-bold tracking-tight md:text-3xl">Platform</div>
          <div className="text-2xl font-bold tracking-tight md:text-3xl">Features</div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <AnimatePresence initial={false}>
        {visible.map((item, i: number) => {
          const p = slots[i];
          return (
            <motion.div
              key={item.id}
              className="absolute left-1/2 top-1/2"
              style={{ width: viewport === "tablet" ? 240 : 280 }}
              initial={{
                x: slots[0].x - 80,
                y: slots[0].y,
                opacity: 0,
                scale: 0.95,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: 1,
                scale: 1,
                translateX: "-50%",
                translateY: "-50%",
              }}
              exit={{
                x: p.x + 80,
                y: p.y + 30,
                opacity: 0,
                scale: 0.95,
                translateX: "-50%",
                translateY: "-50%",
                transition: { duration: ANIM_MS, ease: [0.22, 1, 0.36, 1] },
              }}
              transition={spring}
            >
              <FeatureCard feature={item.feature} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

function MobileStack({ visible }: { visible: VisibleItem[] }) {
  return (
    <div className="relative mx-auto w-full max-w-md px-4">
      <div className="mb-8 flex justify-center">
        <motion.div
          className="flex h-[180px] w-[180px] items-center justify-center rounded-full text-white shadow-[0_20px_60px_rgba(30,58,138,0.45)]"
          style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)" }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-center">
            <div className="text-xl font-bold">Platform</div>
            <div className="text-xl font-bold">Features</div>
          </div>
        </motion.div>
      </div>
      <div className="relative flex flex-col gap-3">
        <AnimatePresence initial={false}>
          {visible.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95, transition: { duration: ANIM_MS } }}
              transition={spring}
            >
              <FeatureCard feature={item.feature} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function FeatureOrbitSection() {
  const features = useMemo(() => FEATURES, []);
  const step = useStepIndex();
  const viewport = useViewport();

  const visible = useMemo(() => {
    const out = [];
    for (let i = 0; i < 5; i++) {
      const idx = (step + i) % features.length;
      out.push({ id: idx, feature: features[idx] });
    }
    return out;
  }, [step, features]);

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-20 md:py-28"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 50% 30%, rgba(37,99,235,0.06), transparent 60%)",
      }}
    >
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center md:mb-16">
        <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-medium text-blue-700">
          Platform overview
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Everything you need to learn, in one place
        </h2>
        <p className="mt-4 text-base text-slate-500 md:text-lg">
          A unified learning hub designed to keep students engaged, mentored, and on track.
        </p>
      </div>

      {viewport === "mobile" ? (
        <MobileStack visible={visible} />
      ) : (
        <OrbitLayout visible={visible} viewport={viewport} />
      )}
    </section>
  );
}