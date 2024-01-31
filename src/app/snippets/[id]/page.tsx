import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteSnippet } from "@/actions";
interface snippetShowProps {
  params: {
    id: string;
  };
}

export default async function snippetShowPage(props: snippetShowProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) return notFound();

  const deleteSnippetId = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p2 border rounded"
          >
            edit
          </Link>
          <form action={deleteSnippetId}>
            <button type="submit" className="p2 border rounded">
              delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
