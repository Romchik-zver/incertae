import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Breadcrumbs } from "~/components/Breadcrumbs";
import { TopicTree } from "~/components/TopicTree";
import { findNodeById, getPathToNode } from "~/data/tree";

export function loader({ params }: LoaderFunctionArgs) {
  const node = findNodeById(params.id ?? "");
  if (!node || node.type !== "topic") {
    throw new Response("Тема не найдена", { status: 404 });
  }
  const path = getPathToNode(node.id) ?? [];
  return json({ node, path });
}

export default function TopicPage() {
  const { node, path } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-8rem)]">
        <div className="mx-auto max-w-5xl px-6 pt-8">
          <Breadcrumbs path={path} />

          <div className="mt-6">
            <h1 className="text-3xl font-bold text-steel-100">{node.name}</h1>
            {node.description && (
              <p className="mt-2 text-steel-400">{node.description}</p>
            )}
          </div>
        </div>

        <TopicTree node={node} />
      </main>
      <Footer />
    </>
  );
}
