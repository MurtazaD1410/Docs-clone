import React from "react";
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";
import { Navbar } from "./navbar";

interface Props {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIDPage = async ({ params }: Props) => {
  // const { documentId } = await params;
  console.log(params);

  return (
    <div className="min-h-screen bg-[#fafbfd] ">
      <div className="flex flex-col px-4 py-2 gap-y-1 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0 flex-1">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIDPage;
