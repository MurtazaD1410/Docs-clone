import React from "react";
import { Editor } from "./editor";

interface Props {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIDPage = async ({ params }: Props) => {
  const { documentId } = await params;
  return (
    <div>
      Document ID : {documentId}
      <Editor />
    </div>
  );
};

export default DocumentIDPage;
