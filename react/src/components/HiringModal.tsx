import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { Sector } from "../data/sectors";
import { IMG_FALLBACK } from "../data/assets";
import { toUL } from "../utils/toUL";

interface HiringModalProps {
  sector: Sector | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function HiringModal({
  sector,
  isOpen,
  onClose,
}: HiringModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const sideCardRef = useRef<HTMLDivElement>(null);
  const popHeaderRef = useRef<HTMLHeadingElement>(null);
  const roleCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isOpen || !sector || !modalRef.current) return;

    const modal = modalRef.current;
    const sideCard = sideCardRef.current;
    const popHeader = popHeaderRef.current;

    modal.classList.remove("hidden");
    modal.style.opacity = "0";

    if (!sideCard || !popHeader) return;

    gsap.set(sideCard, { opacity: 0, x: -60 });
    gsap.set(popHeader, { opacity: 0, y: 40 });

    const tl = gsap.timeline();
    tl.to(modal, { opacity: 1, duration: 0.5 })
      .to(sideCard, { opacity: 1, x: 0, duration: 0.9, ease: "power4.out" })
      .to(popHeader, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");

    roleCardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, y: 20 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3 + i * 0.12,
        ease: "power3.out",
      });
    });

    return () => {
      tl.kill();
    };
  }, [isOpen, sector]);

  const handleClose = () => {
    const modal = modalRef.current;
    if (!modal) {
      onClose();
      return;
    }

    gsap.to(modal, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        modal.classList.add("hidden");
        onClose();
      },
    });
  };

  if (!sector) return null;

  return (
    <div
      id="modal"
      ref={modalRef}
      className={isOpen ? "" : "hidden"}
      aria-hidden={!isOpen}
    >
      <div id="side-card" ref={sideCardRef} className="glass-panel">
        <div className="modal-side-header">
          <span className="modal-domain-label">Industry Domain</span>
          <button
            id="close-btn"
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <h2
          id="metric-title"
          dangerouslySetInnerHTML={{ __html: sector.name }}
        />
        <img
          id="hero-image"
          className="hero-image"
          src={sector.sideImage}
          alt="Industry landscape"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = IMG_FALLBACK;
          }}
        />
        <p
          id="metric-desc"
          dangerouslySetInnerHTML={{ __html: toUL(sector.desc) }}
        />
      </div>

      <div className="modal-main-panel">
        <h3
          id="pop-header"
          ref={popHeaderRef}
          dangerouslySetInnerHTML={{
            __html: `  Scope of AI in  <span class="text-blue-600 font-bold">${sector.name}</span>`,
          }}
        />
        <h4 className="thepopupactivehiring"> Companies Actively hiring</h4>

        <div id="career-nodes-stage" className="popup-roles-grid">
          {sector.roles.map((role, i) => (
            <div
              key={role.name}
              ref={(el) => {
                roleCardRefs.current[i] = el;
              }}
              className="popup-role-card"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <div className="popup-role-card-img">
                <img
                  src={role.img}
                  alt={role.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = IMG_FALLBACK;
                  }}
                />
              </div>
              <span className="popup-role-card-name">{role.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
