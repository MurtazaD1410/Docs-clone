"use client";

import React from "react";
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface Props {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: Props) => {
  const document = usePreloadedQuery(preloadedDocument);
  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfd] ">
        <div className="flex flex-col px-4 py-2 gap-y-1 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0 flex-1">
          <Editor />
        </div>
      </div>
    </Room>
  );
};
