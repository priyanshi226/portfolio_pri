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

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  projectName?: string;
  heading?: string;
  description?: React.ReactNode;
  status?: string;
  features?: string[];
}

export function ProjectCard({
  projectName = "Website Builder",
  heading = "Drag-and-Drop Web Creation Platform",
  description = "Building an intuitive, powerful website builder that empowers non-technical users to create professional, responsive websites without code.",
  status = "Currently in Progress",
  features = [
    "Drag-and-drop visual editor with real-time preview",
    "Responsive design system for all devices",
    "Pre-built component library and templates",
    "One-click deployment and hosting integration"
  ],
  className,
  ...props
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".main-card", { y: 0, autoAlpha: 1 });
      gsap.set([".card-content", ".feature-item", ".status-badge"], { autoAlpha: 0 });

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
          ".card-content",
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "power3.out", duration: 0.8 },
          0,
        )
        .fromTo(
          ".status-badge",
          { scale: 0.8, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, ease: "back.out(1.2)", duration: 0.5 },
          "-=0.4",
        )
        .fromTo(
          ".feature-item",
          { x: -30, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power2.out", duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .to({}, { duration: 0.3 })
        .to([".card-content", ".feature-item", ".status-badge"], {
          y: -40,
          autoAlpha: 0,
          ease: "power3.in",
          duration: 0.4,
          stagger: 0.05,
        });
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

          <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-6 lg:px-12 lg:py-0">
            <div className="card-content gsap-reveal flex w-full flex-col justify-center">
              <div className="mb-4 inline-block w-fit">
                <span className="status-badge floating-ui-badge inline-block rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-300">
                  {status}
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl lg:mb-6">
                {heading}
              </h3>

              <p className="mb-10 max-w-2xl text-base leading-relaxed font-normal text-blue-100/80 md:text-lg">
                {description}
              </p>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/70">Key Features</p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="feature-item gsap-reveal flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-blue-100/70 md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-300/50">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

