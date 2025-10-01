import React from "react";
import { Document } from "./document";
import { Id } from "../../../../convex/_generated/dataModel";
import { auth } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";
import { preloadQuery } from "convex/nextjs";

interface Props {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
}

const DocumentIDPage = async ({ params }: Props) => {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token }
  );

  if (!preloadedDocument) {
    throw new Error("Document not found");
  }

  return <Document preloadedDocument={preloadedDocument} />;
};

export default DocumentIDPage;
