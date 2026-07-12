import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Breadcrumbs } from "~/components/Breadcrumbs";
import { findNodeById, getPathToNode } from "~/data/tree";
import { ArrowLeft, ThumbsUp, MessageCircle, Tag } from "lucide-react";

export function loader({ params }: LoaderFunctionArgs) {
  const node = findNodeById(params.id ?? "");
  if (!node || node.type !== "question") {
    throw new Response("Вопрос не найден", { status: 404 });
  }
  const path = getPathToNode(node.id) ?? [];
  return json({ node, path });
}

export default function QuestionPage() {
  const { node, path } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-8rem)]">
        <div className="mx-auto max-w-3xl px-6 pt-8">
          <Breadcrumbs path={path} />

          <div className="mt-8">
            <Link
              to={path.length > 0 ? `/topic/${path[path.length - 1].id}` : "/"}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-steel-500 hover:text-accent-400 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Назад
            </Link>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-steel-100 sm:text-4xl">
              {node.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-steel-300">
              {node.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-ink-700 bg-ink-900 px-3 py-1.5 text-xs font-medium text-steel-400">
                <ThumbsUp className="h-3.5 w-3.5 text-accent-500" />
                {node.votes} голосов
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-ink-700 bg-ink-900 px-3 py-1.5 text-xs font-medium text-steel-400">
                <MessageCircle className="h-3.5 w-3.5 text-accent-500" />0
                ответов
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Tag className="h-3.5 w-3.5 text-steel-600" />
              {node.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink-700 bg-ink-950 px-2.5 py-1 text-[10px] font-medium text-steel-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-ink-800 bg-ink-900/40 p-8 text-center">
            <p className="text-sm text-steel-500">
              Ответы и обсуждение появятся в следующем этапе разработки.
            </p>
            <p className="mt-2 text-xs text-ink-600">
              AI-чат и форум в процессе.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
