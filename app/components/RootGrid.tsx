import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { rootNodes, countQuestions } from "~/data/tree";

export function RootGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-steel-100">Области знаний</h2>
        <p className="mt-1 text-sm text-steel-400">
          Выберите направление и проваливайтесь вглубь нерешённых проблем
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rootNodes.map((node, i) => {
          const qCount = countQuestions(node);
          return (
            <Link
              key={node.id}
              to={`/topic/${node.id}`}
              className="group relative flex flex-col rounded-2xl border border-ink-800 bg-ink-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-ink-900 hover:shadow-lg hover:shadow-accent-500/5"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-xs font-bold text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-600 transition-all group-hover:text-accent-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-steel-100 group-hover:text-accent-300 transition-colors">
                {node.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-steel-400">
                {node.description}
              </p>

              <div className="mt-auto flex items-center gap-2 text-xs text-steel-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
                {qCount}{" "}
                {qCount === 1 ? "вопрос" : qCount < 5 ? "вопроса" : "вопросов"}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
