import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ExternalLinkIcon,
  FilePenIcon,
  MoreVerticalIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
  documentId: Id<"documents">;
  title: string;
  onNewTabClick: (id: Id<"documents">) => void;
}

export const DocumentMenu = ({
  documentId,
  onNewTabClick,
  title,
}: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <MoreVerticalIcon className="size-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <RenameDialog documentId={documentId} initalTitle={title}>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilePenIcon className="size-4 mr-2" />
            Rename
          </DropdownMenuItem>
        </RenameDialog>
        <RemoveDialog documentId={documentId}>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Trash2Icon className="size-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </RemoveDialog>
        <DropdownMenuItem onClick={() => onNewTabClick(documentId)}>
          <ExternalLinkIcon className="size-4 mr-2" />
          Open in a new tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
