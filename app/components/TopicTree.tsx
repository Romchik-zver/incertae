import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Folder,
  FolderOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import type { TopicNode, QuestionNode, TreeNode } from "~/data/tree";

interface TopicTreeProps {
  node: TopicNode;
}

function isTopic(node: TreeNode): node is TopicNode {
  return node.type === "topic";
}

function isQuestion(node: TreeNode): node is QuestionNode {
  return node.type === "question";
}

function Subtree({ nodes, depth = 0 }: { nodes: TreeNode[]; depth?: number }) {
  const [open, setOpen] = useState<Set<string>>(() => {
    const s = new Set<string>();
    nodes.filter(isTopic).forEach((n) => s.add(n.id));
    return s;
  });

  const toggle = (id: string) => {
    const next = new Set(open);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setOpen(next);
  };

  return (
    <div className={depth > 0 ? "ml-4 border-l border-ink-800/60" : ""}>
      {nodes.map((node, idx) => {
        if (isTopic(node)) {
          const isOpen = open.has(node.id);
          const isLast = idx === nodes.length - 1;

          return (
            <div key={node.id}>
              <button
                onClick={() => toggle(node.id)}
                className="flex w-full items-center gap-2 px-4 py-3 text-left hover:bg-ink-800/40 transition-colors"
              >
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 text-steel-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-steel-500" />
                )}
                {isOpen ? (
                  <FolderOpen className="h-4 w-4 text-accent-400" />
                ) : (
                  <Folder className="h-4 w-4 text-accent-500/70" />
                )}
                <span className="text-sm font-semibold text-steel-200">
                  {node.name}
                </span>
                <span className="ml-auto text-xs text-ink-600">
                  {node.children.length}
                </span>
              </button>

              {isOpen && (
                <div className={isLast ? "" : "border-b border-ink-800/30"}>
                  <Subtree nodes={node.children} depth={depth + 1} />
                </div>
              )}
            </div>
          );
        }

        if (isQuestion(node)) {
          return (
            <Link
              to={`/question/${node.id}`}
              key={node.id}
              className="group relative flex items-start gap-3 px-4 py-3 pl-10 hover:bg-ink-800/30 transition-colors"
            >
              <div className="absolute left-[2.15rem] top-0 h-full w-px bg-ink-800" />
              {idx === nodes.length - 1 && (
                <div className="absolute left-[2.15rem] top-0 h-1/2 w-px bg-ink-950" />
              )}
              <div className="absolute left-[2.15rem] top-1/2 h-px w-3 bg-ink-800" />

              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-steel-500 group-hover:text-accent-400 transition-colors" />

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-steel-200 group-hover:text-accent-300 transition-colors truncate">
                  {node.title}
                </h4>
                <p className="mt-0.5 text-xs leading-relaxed text-steel-500 line-clamp-2">
                  {node.excerpt}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs text-steel-500">
                    <ThumbsUp className="h-3 w-3" />
                    {node.votes}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-steel-500">
                    <MessageCircle className="h-3 w-3" />0
                  </span>
                  <div className="flex items-center gap-1.5">
                    {node.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-700 bg-ink-950 px-2 py-0.5 text-[10px] font-medium text-steel-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-700 group-hover:text-accent-400 transition-colors" />
            </Link>
          );
        }

        return null;
      })}
    </div>
  );
}

export function TopicTree({ node }: TopicTreeProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-xl border border-ink-800 bg-ink-900/40">
        <Subtree nodes={node.children} />
      </div>
    </div>
  );
}
