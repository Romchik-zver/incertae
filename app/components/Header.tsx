import { Link } from "@remix-run/react";
import { FlaskConical, HelpCircle } from "lucide-react";
import { rootNodes } from "~/data/tree";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-steel-100 hover:text-accent-400 transition-colors"
        >
          <FlaskConical className="h-5 w-5 text-accent-500" />
          <span>incertae</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-steel-400 md:flex">
          <Link to="/" className="hover:text-steel-100 transition-colors">
            Главная
          </Link>
          {rootNodes.slice(0, 6).map((node) => (
            <Link
              key={node.id}
              to={`/topic/${node.id}`}
              className="hover:text-steel-100 transition-colors"
            >
              {node.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-900 px-3 py-1.5 text-xs font-medium text-steel-300 hover:border-accent-500 hover:text-accent-400 transition-all"
        >
          <HelpCircle className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Предложить вопрос</span>
        </Link>
      </div>
    </header>
  );
}
