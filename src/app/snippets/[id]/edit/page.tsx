import { db } from "@/db";
import React from "react";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface EditSnippetProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage({
  params: { id: snippetID },
}: EditSnippetProps) {
  const id = parseInt(snippetID);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
