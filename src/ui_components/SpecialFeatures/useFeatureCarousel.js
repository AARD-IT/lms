import { useCallback, useEffect, useRef } from "react";

/** Imperative port of renderCarousel() from index.html — updates DOM refs directly */
export function useFeatureCarousel(featureCount) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const itemRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const startedRef = useRef(false);
  const intervalRef = useRef(null);

  const renderCarousel = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const isMobile = window.innerWidth <= 767;
    const stageWidth = stage.offsetWidth;
    const stageHeight = stage.offsetHeight;
    if (!stageWidth || !stageHeight) return;

    const centerX = stageWidth / 2;
    const centerY = stageHeight / 2;
    const activeIndex = activeIndexRef.current;

    itemRefs.current.forEach((item, i) => {
      if (!item) return;

      item.classList.remove("visible", "active");

      if (isMobile) {
        if (i === activeIndex) {
          item.classList.add("visible", "active");
          item.style.left = `${centerX - item.offsetWidth / 2}px`;
          item.style.top = `${centerY - 200}px`;
        }
        return;
      }

      const diff = (i - activeIndex + featureCount) % featureCount;

      if (diff <= 2 || diff >= featureCount - 2) {
        const slot = diff <= 2 ? diff : diff - featureCount;
        const relativeIndex = slot + 2;
        const angle = Math.PI - relativeIndex * (Math.PI / 4);
        const radius = 300;

        item.style.left = `${Math.cos(angle) * radius + centerX - item.offsetWidth / 2}px`;
        item.style.top = `${-Math.sin(angle) * radius + centerY}px`;
        item.classList.add("visible");
        if (i === activeIndex) item.classList.add("active");
      }
    });
  }, [featureCount]);

  const rotateCarousel = useCallback(() => {
    activeIndexRef.current = (activeIndexRef.current + 1) % featureCount;
    renderCarousel();
  }, [featureCount, renderCarousel]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onResize = () => renderCarousel();
    const observer = new ResizeObserver(onResize);
    observer.observe(stage);
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [renderCarousel]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      requestAnimationFrame(() => renderCarousel());
      intervalRef.current = window.setInterval(rotateCarousel, 2000);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) start();
      },
      { threshold: 0.4 }
    );

    io.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) start();

    return () => {
      io.disconnect();
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      startedRef.current = false;
    };
  }, [renderCarousel, rotateCarousel]);

  const setItemRef = useCallback(
    (index) => (el) => {
      itemRefs.current[index] = el;
    },
    []
  );

  const scheduleRender = useCallback(() => {
    if (startedRef.current) renderCarousel();
  }, [renderCarousel]);

  return {
    sectionRef,
    stageRef,
    setItemRef,
    scheduleRender,
  };
}
