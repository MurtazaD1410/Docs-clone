import React from "react";
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface Props {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIDPage = async ({ params }: Props) => {
  // const { documentId } = await params;
  console.log(params);

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIDPage;
