"use client";

import React from "react";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { FullscreenLoader } from "@/components/fullscreen-loader";
import { DocumentsTable } from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam("search");
  const { isLoading, loadMore, results, status } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          loadMore={loadMore}
          documents={results}
          status={status}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Home;
