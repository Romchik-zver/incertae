import { useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        <h1 className="text-7xl font-black tracking-tighter text-steel-100 sm:text-8xl md:text-9xl">
          incertae
        </h1>

        <p
          className="mt-6 text-lg font-light text-steel-400 sm:text-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Find answer to{" "}
          <span className="relative inline-block font-medium text-steel-200 transition-all duration-300">
            <span
              className="inline-block transition-all duration-300"
              style={{
                opacity: hovered ? 0 : 1,
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              incertae
            </span>
            <span
              className="absolute left-0 top-0 inline-block text-accent-400 transition-all duration-300"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(4px)",
              }}
            >
              unresolved questions
            </span>
          </span>
        </p>

        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-xs font-medium text-steel-400">
            <Sparkles className="h-3 w-3 text-accent-500" />
            33 нерешённых вопроса
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-xs font-medium text-steel-400">
            6 областей знаний
          </span>
        </div>
      </div>

      <div className="mt-20 animate-bounce">
        <ArrowDown className="h-5 w-5 text-ink-600" />
      </div>
    </section>
  );
}
