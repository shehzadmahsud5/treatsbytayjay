"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealLines = [
  "Made for your moment",
  "Cakes, cupcakes, cookies & more",
  "Handmade for Manchester celebrations",
  "Start your enquiry",
];

const frameCount = 72;
const frameSrc = (index: number) =>
  `/assets/hero-frames/frame-${String(index).padStart(2, "0")}.webp`;

// TODO: Replace Linktree with the direct Treats By Tayjah enquiry form URL when the client provides it.
const ENQUIRY_URL = "https://linktr.ee/treatsbytayjah";

export function HeroCupcakeScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const desktopFrameRef = useRef<HTMLImageElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const revealRef = useRef<HTMLSpanElement | null>(null);
  const activeLineRef = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateQueries = () => {
      setIsDesktop(desktopQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    updateQueries();
    desktopQuery.addEventListener("change", updateQueries);
    motionQuery.addEventListener("change", updateQueries);

    return () => {
      desktopQuery.removeEventListener("change", updateQueries);
      motionQuery.removeEventListener("change", updateQueries);
    };
  }, []);

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (!video || isDesktop || reducedMotion) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Poster remains visible if the browser declines autoplay.
      }
    };

    playVideo();
  }, [isDesktop, reducedMotion]);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    const frame = desktopFrameRef.current;
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    if (!frame || !section || !pin || !stage) return;

    let rafId = 0;
    let targetFrame = 0;
    let displayedFrame = 0;
    let activeFrame = 0;
    activeLineRef.current = 0;
    if (revealRef.current) revealRef.current.textContent = revealLines[0];

    frame.src = frameSrc(0);

    const ctx = gsap.context(() => {
      gsap.set(stage, { clearProps: "transform" });
      gsap.set(revealRef.current, { autoAlpha: 1, y: 0 });

      for (let i = 0; i < frameCount; i += 1) {
        const image = new Image();
        image.src = frameSrc(i);
      }

      const updateFrame = () => {
        displayedFrame += (targetFrame - displayedFrame) * 0.18;
        const nextFrame = Math.min(
          frameCount - 1,
          Math.max(0, Math.round(displayedFrame)),
        );

        if (nextFrame !== activeFrame) {
          activeFrame = nextFrame;
          frame.src = frameSrc(nextFrame);
        }

        rafId = window.requestAnimationFrame(updateFrame);
      };

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=105%",
        pin,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextProgress = self.progress;
          targetFrame = nextProgress * (frameCount - 1);

          const activeIndex = Math.min(
            revealLines.length - 1,
            Math.floor(nextProgress * revealLines.length),
          );

          if (activeIndex !== activeLineRef.current && revealRef.current) {
            activeLineRef.current = activeIndex;
            const line = revealRef.current;
            gsap
              .timeline({ defaults: { ease: "power2.out" } })
              .to(line, {
                autoAlpha: 0,
                y: -8,
                duration: 0.16,
                overwrite: "auto",
                onComplete: () => {
                  line.textContent = revealLines[activeIndex];
                },
              })
              .fromTo(
                line,
                { autoAlpha: 0, y: 10 },
                { autoAlpha: 1, y: 0, duration: 0.24 },
              );
          } else if (revealRef.current) {
            gsap.set(revealRef.current, { autoAlpha: 1 });
          }

          gsap.set(stage, { clearProps: "transform" });
        },
      });

      rafId = window.requestAnimationFrame(updateFrame);
      ScrollTrigger.refresh();

      return () => {
        window.cancelAnimationFrame(rafId);
        trigger.kill();
      };
    }, section);

    return () => ctx.revert();
  }, [isDesktop, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-cinema relative isolate overflow-clip bg-[#fffdf9] pt-20 lg:pt-0"
      aria-label="Treats By Tayjah animated cupcake introduction"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,1)_0%,rgba(255,253,249,0.98)_46%,rgba(255,247,237,0.72)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[74vmin] w-[74vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-toasted/15 bg-porcelain/55 blur-[1px] lg:h-[70vmin] lg:w-[70vmin]" />

      <div ref={pinRef} className="lg:min-h-svh">
        <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[92rem] flex-col px-5 pb-10 pt-7 md:px-8 lg:min-h-svh lg:px-12 lg:pb-9 lg:pt-24 xl:px-16">
          <div className="z-20 max-w-[34rem] lg:absolute lg:left-12 lg:top-[32svh] lg:max-w-[17rem] xl:left-16 xl:max-w-[19rem]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-raspberry">
              Manchester M14 custom treats
            </p>
              <h1 className="font-serif text-[2.45rem] leading-[1.05] text-ganache md:text-6xl lg:text-[clamp(2.5rem,3vw,3.55rem)]">
              Custom cakes, cupcakes and cookies for Manchester celebrations.
            </h1>
            </div>

          <div className="order-first z-10 flex justify-center lg:order-none lg:absolute lg:inset-x-0 lg:top-[14svh]">
              <div
                ref={stageRef}
                className="hero-product-stage relative w-full max-w-[min(92vw,620px)] lg:max-w-none"
              >
                {!reducedMotion ? (
                  <>
                    <img
                      className="hero-video hidden"
                      src="/assets/hero-cupcake-poster.png"
                      alt=""
                      aria-hidden="true"
                    />
                    <img
                      ref={desktopFrameRef}
                      className="hero-video hidden lg:block"
                      src={frameSrc(0)}
                      alt=""
                      aria-hidden="true"
                    />
                    <video
                      ref={mobileVideoRef}
                      className="hero-video lg:hidden"
                      muted
                      playsInline
                      preload="metadata"
                      autoPlay
                      loop
                      poster="/assets/hero-cupcake-poster.png"
                      aria-label="Cupcake reveal animation for Treats By Tayjah"
                    >
                      <source src="/assets/hero-cupcake.mp4" type="video/mp4" />
                    </video>
                  </>
                ) : (
                  <img
                    className="hero-video"
                    src="/assets/hero-cupcake-poster.png"
                    alt="Cupcake prototype visual for Treats By Tayjah"
                  />
                )}
              </div>
            </div>

          <div className="z-20 flex flex-col lg:absolute lg:right-12 lg:top-[38svh] lg:max-w-[18.5rem] xl:right-16 xl:max-w-[19.5rem]">
              <p className="max-w-md text-base leading-8 text-ganache/72 md:text-lg">
              Treats By Tayjah creates beautifully finished custom treats from
              Manchester M14, made for birthdays, gifts, events and the little
              moments worth celebrating.
            </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <a
                className="btn-primary"
                href={ENQUIRY_URL}
                rel="noreferrer"
                target="_blank"
              >
                Start an enquiry
              </a>
              <a className="btn-secondary" href="#gallery">
                View recent bakes
              </a>
            </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-ganache/62">
              Based in Manchester M14. Availability, collection and delivery
              details are confirmed during enquiry.
            </p>
          </div>

          <div
            className="relative z-20 mt-5 min-h-14 text-center font-serif text-2xl text-ganache md:text-3xl lg:absolute lg:left-1/2 lg:top-[10svh] lg:mt-0 lg:w-[min(62vw,820px)] lg:-translate-x-1/2 lg:text-4xl"
            aria-live="polite"
          >
            <span ref={revealRef} className="block">
              {revealLines[0]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
