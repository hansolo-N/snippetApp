import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3"> create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              code
            </label>
            <textarea
              name="code"
              id="code"
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          create snippet
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
