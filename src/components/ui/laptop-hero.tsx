"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: visible; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #162C6D 0%, #0A101D 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .laptop-bezel {
      background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow:
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7),
          inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }
`;

export interface LaptopHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  projectName?: string;
  heading?: string;
  description?: React.ReactNode;
}

export function LaptopHero({
  projectName = "Pratinidhi AI",
  heading = "Agent Workflows at Scale",
  description = "Built intelligent agent pipelines for business automation with guardrails, evaluations, and real-world deployments.",
  className,
  ...props
}: LaptopHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Initialize - card visible with animation ready
      gsap.set(".main-card", { y: 0, autoAlpha: 1 });
      gsap.set(
        [
          ".card-left-text",
          ".mockup-scroll-wrapper",
          ".floating-badge",
        ],
        { autoAlpha: 0 },
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .fromTo(
          ".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 0.8 },
          0,
        )
        .fromTo(
          ".card-left-text",
          { x: isMobile ? -50 : 50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 0.5 },
          "-=0.4",
        )
        .fromTo(
          ".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 0.5, stagger: 0.05 },
          "-=0.4",
        )
        .to({}, { duration: 0.3 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text"], {
          scale: 0.9,
          y: -40,
          z: -200,
          autoAlpha: 0,
          ease: "power3.in",
          duration: 0.4,
          stagger: 0.02,
        })
        .to(
          ".main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 0.5,
          },
          "pullback",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background font-sans text-foreground antialiased",
        className,
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme pointer-events-none absolute inset-0 z-0 opacity-50" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card gsap-reveal pointer-events-auto relative flex h-[92vh] w-[92vw] items-center justify-center overflow-hidden rounded-[32px] md:h-[85vh] md:w-[85vw] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-0">

            {/* LEFT SECTION - Text Content */}
            <div className="card-left-text gsap-reveal flex w-full flex-col justify-center text-center lg:order-2 lg:text-right lg:pl-8">
              <h3 className="mb-0 text-2xl font-bold tracking-tight text-white md:text-3xl lg:mb-6 lg:text-4xl">
                {heading}
              </h3>
              <p className="mx-auto text-sm leading-relaxed font-normal text-blue-100/70 md:text-base lg:mx-0 lg:ml-auto lg:max-w-md lg:text-lg lg:text-right">
                {description}
              </p>
            </div>

            {/* RIGHT SECTION - Laptop + Cards */}
            <div className="mockup-scroll-wrapper relative z-10 flex h-[380px] w-full items-center justify-center lg:order-1 lg:h-[600px]" style={{ perspective: "1000px" }}>
              {/* Laptop Mockup Container */}
              <div className="relative flex h-full w-full scale-[0.65] items-center justify-center md:scale-[0.85] lg:scale-100 z-10">
                <div
                  ref={mockupRef}
                  className="laptop-bezel transform-style-3d relative flex h-[360px] w-[640px] flex-col rounded-[16px] will-change-transform"
                  style={{
                    boxShadow: "0 0 60px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  {/* Laptop screen */}
                  <div className="absolute inset-[8px] z-10 overflow-hidden rounded-[12px] bg-[#0f0f1e] text-white shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                    {/* Screen glare effect */}
                    <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />

                    {/* Laptop content - image */}
                    <div className="relative flex h-full w-full items-center justify-center">
                      <img
                        src="desktop_img.jpeg"
                        alt="Pratinidhi AI Dashboard"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="floating-badge floating-ui-badge absolute top-8 -left-12 lg:top-8 lg:-left-6 z-20 flex flex-col gap-2 rounded-xl p-3 lg:gap-3 lg:rounded-2xl lg:p-4 w-52 lg:w-64">
                  <p className="text-xs font-bold tracking-tight text-white lg:text-sm uppercase">CRM Dashboard</p>
                  <p className="text-[10px] font-medium text-blue-200/70 lg:text-xs leading-relaxed">
                    Built a web dashboard for managing conversation pipelines and CRM stages using React.js with component-level state management, controlled form validation, and a unified REST API integration layer.
                  </p>
                </div>

                <div className="floating-badge floating-ui-badge absolute bottom-8 -right-12 lg:bottom-8 lg:-right-12 z-20 flex flex-col gap-2 rounded-xl p-3 lg:gap-3 lg:rounded-2xl lg:p-4 w-52 lg:w-64">
                  <p className="text-xs font-bold tracking-tight text-white lg:text-sm uppercase">Backend Architecture</p>
                  <p className="text-[10px] font-medium text-blue-200/70 lg:text-xs leading-relaxed">
                    Modular backend following controllers/services/repositories pattern, covering intake, qualification, routing, and lifecycle tracking. Automation workflow triggers and background job hooks with structured logging for production observability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
