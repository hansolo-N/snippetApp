import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        className={`flex justify-between items-center p-2 border rounded`}
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
      >
        <div>{snippet.title}</div>
        <div className="hover:text-green-600 hover:font-bold hover:text-md">
          View Snippet
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1 className="p-2 text-xl font-bold">Welcome To the Snippets App</h1>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold"></h1>
        <Link
          href={`/snippets/new`}
          className="border p-2 rounded text-green-600 font-bold"
        >
          New Snippet
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
