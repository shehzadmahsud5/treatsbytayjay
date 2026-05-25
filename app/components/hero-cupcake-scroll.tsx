const revealLines = [
  "Made for your moment",
  "Handmade for your celebrations",
];

const frameCount = 72;
const frameSrc = (index: number) =>
  `/assets/hero-frames/frame-${String(index).padStart(2, "0")}.webp`;

const ENQUIRY_URL = "#enquiry";

const heroScript = `
(() => {
  const section = document.querySelector("[data-hero-section]");
  const frame = document.querySelector("[data-hero-frame]");
  const reveals = Array.from(document.querySelectorAll("[data-hero-reveal]"));
  if (!section || !frame || reveals.length === 0) return;

  if (window.__tbtHeroCleanup) window.__tbtHeroCleanup();

  const lines = ${JSON.stringify(revealLines)};
  const frameCount = ${frameCount};
  const frameSrc = (index) => "/assets/hero-frames/frame-" + String(index).padStart(2, "0") + ".webp";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeFrame = 0;
  let activeLine = 0;
  let targetFrame = 0;
  let displayedFrame = 0;
  let rafId = 0;
  let revealTimer = 0;
  let hasSyncedInitialFrame = false;
  const preloadedFrames = new Set([0]);

  const preloadFrame = (index) => {
    const safeIndex = Math.min(frameCount - 1, Math.max(0, index));
    if (preloadedFrames.has(safeIndex)) return;
    preloadedFrames.add(safeIndex);
    const image = new Image();
    image.src = frameSrc(safeIndex);
  };

  const preloadAround = (index, radius = 8) => {
    for (let i = index - 2; i <= index + radius; i += 1) {
      preloadFrame(i);
    }
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const updateTarget = () => {
    const travel = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = clamp(-section.getBoundingClientRect().top / travel, 0, 1);
    targetFrame = progress * (frameCount - 1);
    preloadAround(Math.round(targetFrame));

    if (!hasSyncedInitialFrame) {
      hasSyncedInitialFrame = true;
      displayedFrame = targetFrame;
      activeFrame = clamp(Math.round(displayedFrame), 0, frameCount - 1);
      frame.src = frameSrc(activeFrame);
    }

    const nextLine = clamp(Math.floor(progress * lines.length), 0, lines.length - 1);
    if (nextLine !== activeLine) {
      activeLine = nextLine;
      window.clearTimeout(revealTimer);
      reveals.forEach((reveal) => {
        reveal.style.opacity = "0";
      });
      revealTimer = window.setTimeout(() => {
        reveals.forEach((reveal) => {
          reveal.textContent = lines[nextLine];
          reveal.dataset.line = String(nextLine);
          reveal.style.opacity = "1";
        });
      }, 180);
    }
  };

  const tick = () => {
    const distance = Math.abs(targetFrame - displayedFrame);
    const ease = distance > 18 ? 0.48 : 0.26;
    displayedFrame += (targetFrame - displayedFrame) * ease;
    const nextFrame = clamp(Math.round(displayedFrame), 0, frameCount - 1);
    if (nextFrame !== activeFrame) {
      activeFrame = nextFrame;
      preloadAround(nextFrame);
      frame.src = frameSrc(nextFrame);
    }
    rafId = window.requestAnimationFrame(tick);
  };

  if (!reducedMotion) {
    preloadAround(0, 12);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);
    updateTarget();
    rafId = window.requestAnimationFrame(tick);
  }

  window.__tbtHeroCleanup = () => {
    window.removeEventListener("scroll", updateTarget);
    window.removeEventListener("resize", updateTarget);
    window.clearTimeout(revealTimer);
    window.cancelAnimationFrame(rafId);
  };
})();
`;

export function HeroCupcakeScroll() {
  return (
    <section
      id="top"
      className="hero-cinema relative isolate overflow-clip bg-[#fffdf9] pt-20 lg:pt-0"
      aria-label="Treats By Tayjah animated cupcake introduction"
      data-hero-section
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,1)_0%,rgba(255,253,249,0.98)_46%,rgba(255,247,237,0.72)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[74vmin] w-[74vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-toasted/15 bg-porcelain/55 blur-[1px] lg:h-[70vmin] lg:w-[70vmin]" />

      <div className="hero-pin lg:min-h-svh">
        <div className="hero-layout relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[92rem] flex-col px-5 pb-10 pt-7 md:px-8 lg:min-h-svh lg:px-12 lg:pb-9 lg:pt-24 xl:px-16">
          <div className="hero-copy-block z-20 max-w-[34rem] lg:absolute lg:left-12 lg:top-[32svh] lg:max-w-[17rem] xl:left-16 xl:max-w-[19rem]">
            <h1 className="font-serif text-[2.45rem] leading-[1.05] text-ganache md:text-6xl lg:text-[clamp(2.5rem,3vw,3.55rem)]">
              Custom Manchester treats for birthdays, gifts and celebrations.
            </h1>
          </div>

          <div className="hero-media-wrap order-first z-10 flex justify-center lg:order-none lg:absolute lg:inset-x-0 lg:top-[14svh]">
            <div className="hero-product-stage relative w-full max-w-[min(92vw,620px)] lg:max-w-none">
              <img
                className="hero-video"
                src={frameSrc(0)}
                alt=""
                aria-hidden="true"
                data-hero-frame
              />
            </div>
            <div
              className="hero-reveal-mobile z-20 text-center font-serif text-2xl text-ganache"
              aria-live="polite"
            >
              <span className="hero-reveal-line block" data-hero-reveal data-line="0">
                {revealLines[0]}
              </span>
            </div>
          </div>

          <div
            className="hero-reveal-wrap hero-reveal-desktop relative z-20 mt-5 min-h-14 text-center font-serif text-2xl text-ganache md:text-3xl lg:absolute lg:left-1/2 lg:top-[10svh] lg:mt-0 lg:w-[min(62vw,820px)] lg:-translate-x-1/2 lg:text-4xl"
            aria-live="polite"
          >
            <span className="hero-reveal-line block" data-hero-reveal data-line="0">
              {revealLines[0]}
            </span>
          </div>

          <div className="hero-support-block z-20 flex flex-col lg:absolute lg:right-12 lg:top-[38svh] lg:max-w-[18.5rem] xl:right-16 xl:max-w-[19.5rem]">
            <p className="max-w-md text-base leading-8 text-ganache/72 md:text-lg">
              Beautifully finished cakes, cupcakes and cookies, with
              availability, collection and delivery details confirmed during
              enquiry.
            </p>
            <div className="hero-mobile-actions mt-7 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <a className="btn-primary" href={ENQUIRY_URL}>
                Start an enquiry
              </a>
              <a className="btn-secondary" href="#gallery">
                View recent bakes
              </a>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-ganache/62">
              Enquiry-led ordering for celebrations across Manchester.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-mobile-summary mx-auto px-5 text-center lg:hidden">
        <h1 className="font-serif text-[2.25rem] leading-[1.08] text-ganache">
          Custom Manchester treats for birthdays, gifts and celebrations.
        </h1>
        <p className="mx-auto mt-5 max-w-[21.5rem] text-[0.98rem] leading-8 text-ganache/70">
          Beautifully finished cakes, cupcakes and cookies, with availability,
          collection and delivery confirmed during enquiry.
        </p>
      </div>
      <script dangerouslySetInnerHTML={{ __html: heroScript }} />
    </section>
  );
}
