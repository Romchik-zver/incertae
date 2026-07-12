import { Link } from "@remix-run/react";
import { ChevronRight, Home } from "lucide-react";
import type { TopicNode } from "~/data/tree";

interface BreadcrumbsProps {
  path: TopicNode[];
}

export function Breadcrumbs({ path }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-steel-400">
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-accent-400 transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>

      {path.map((node) => (
        <span key={node.id} className="flex items-center gap-2">
          <ChevronRight className="h-3 w-3 text-ink-600" />
          <Link
            to={`/topic/${node.id}`}
            className="hover:text-steel-100 transition-colors"
          >
            {node.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}
