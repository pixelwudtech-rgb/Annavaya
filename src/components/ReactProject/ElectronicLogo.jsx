import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

/* =========================================================
   CONFIG
========================================================= */
const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = value =>
  typeof value === 'number' ? `${value}px` : value ?? undefined;

const cx = (...parts) => parts.filter(Boolean).join(' ');

/* =========================================================
   HOOKS
========================================================= */
const useResizeObserver = (callback, elements, deps) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const obs = new ResizeObserver(callback);
      obs.observe(ref.current);
      return obs;
    });

    callback();
    return () => observers.forEach(o => o?.disconnect());
  }, [callback, elements, deps]);
};

const useImageLoader = (seqRef, onLoad, deps) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (!images.length) return onLoad();

    let remaining = images.length;
    const done = () => --remaining === 0 && onLoad();

    images.forEach(img => {
      if (img.complete) done();
      else {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      }
    });

    return () =>
      images.forEach(img => {
        img.removeEventListener('load', done);
        img.removeEventListener('error', done);
      });
  }, [onLoad, seqRef, deps]);
};

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  seqHeight,
  isHovered,
  hoverSpeed,
  isVertical
) => {
  const rafRef = useRef(null);
  const lastTs = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const size = isVertical ? seqHeight : seqWidth;

    if (prefersReduced) {
      track.style.transform = 'translate3d(0,0,0)';
      return;
    }

    const animate = ts => {
      if (lastTs.current === null) lastTs.current = ts;
      const dt = Math.max(0, ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const easing = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocity.current += (target - velocity.current) * easing;

      if (size > 0) {
        offset.current = ((offset.current + velocity.current * dt) % size + size) % size;
        track.style.transform = isVertical
          ? `translate3d(0, ${-offset.current}px, 0)`
          : `translate3d(${-offset.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      rafRef.current && cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTs.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

/* =========================================================
   COMPONENT
========================================================= */
export const LogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'left',
  width = '85%',
  logoHeight = 100,      // DESKTOP DEFAULT (unchanged)
  gap = 32,              // DESKTOP DEFAULT (unchanged)
  pauseOnHover,
  hoverSpeed,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  ariaLabel = 'Partner logos',
  className,
  style
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [seqHeight, setSeqHeight] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = direction === 'up' || direction === 'down';

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true) return 0;
    if (pauseOnHover === false) return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const targetVelocity = useMemo(() => {
    const mag = Math.abs(speed);
    const dir = isVertical
      ? direction === 'up' ? 1 : -1
      : direction === 'left' ? 1 : -1;
    return mag * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction, isVertical]);

  const updateDimensions = useCallback(() => {
    const cw = containerRef.current?.clientWidth ?? 0;
    const rect = seqRef.current?.getBoundingClientRect?.();
    const sw = rect?.width ?? 0;
    const sh = rect?.height ?? 0;

    if (isVertical) {
      if (sh > 0) {
        setSeqHeight(Math.ceil(sh));
        const viewport = containerRef.current?.clientHeight ?? sh;
        setCopyCount(Math.max(
          ANIMATION_CONFIG.MIN_COPIES,
          Math.ceil(viewport / sh) + ANIMATION_CONFIG.COPY_HEADROOM
        ));
      }
    } else if (sw > 0) {
      setSeqWidth(Math.ceil(sw));
      setCopyCount(Math.max(
        ANIMATION_CONFIG.MIN_COPIES,
        Math.ceil(cw / sw) + ANIMATION_CONFIG.COPY_HEADROOM
      ));
    }
  }, [isVertical]);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

  /* ================= RESPONSIVE CSS VARIABLES =================
     Mobile-first, Desktop unchanged
     Mobile shows ~3 logos in viewport
  ============================================================= */
  const rootClasses = cx(
    'relative group select-none',
    isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
    'w-full md:w-auto',

    /* MOBILE (3 logos visible approx) */
    '[--logoloop-logoHeight:26px]',
    '[--logoloop-gap:16px]',

    /* DESKTOP (UNCHANGED VISUALS) */
    'md:[--logoloop-logoHeight:20px]',
    'md:[--logoloop-gap:32px]',

    '[--logoloop-fadeColorAuto:#ffffff]',
    'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
    scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
    className
  );

  const containerStyle = {
    width: isVertical
      ? toCssLength(width) === '100%' ? undefined : toCssLength(width)
      : toCssLength(width) ?? '100%',
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
    ...style
  };

  const renderLogoItem = (item, key) => (
    <li
      key={key}
      role="listitem"
      className={cx(
        'flex-none leading-none',
        isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
        scaleOnHover && 'group/item'
      )}
    >
      <img
        src={item.src}
        alt={item.alt ?? ''}
        className={cx(
          'h-[var(--logoloop-logoHeight)] w-auto max-w-[60px] md:max-w-[150px] object-contain block',

          'pointer-events-none',
          scaleOnHover && 'transition-transform duration-300 group-hover/item:scale-110'
        )}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </li>
  );

  const logoLists = Array.from({ length: copyCount }, (_, c) => (
    <ul
      key={c}
      ref={c === 0 ? seqRef : undefined}
      role="list"
      aria-hidden={c > 0}
      className={cx('flex items-center', isVertical && 'flex-col')}
    >
      {logos.map((l, i) => renderLogoItem(l, `${c}-${i}`))}
    </ul>
  ));

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => effectiveHoverSpeed !== undefined && setIsHovered(true)}
      onMouseLeave={() => effectiveHoverSpeed !== undefined && setIsHovered(false)}
    >
      {fadeOut && !isVertical && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(24px,8%,120px)] bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(24px,8%,120px)] bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,transparent_100%)]" />
        </>
      )}

      <div
        ref={trackRef}
        className={cx(
          'flex will-change-transform motion-reduce:transform-none',
          isVertical ? 'flex-col w-full' : 'flex-row w-max max-w-none'
        )}
      >
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
