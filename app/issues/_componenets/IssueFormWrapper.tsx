"use client";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "./IssueFormSkeleton";
import { Issue } from "@/app/generated/prisma/client";

const IssueForm = dynamic(() => import("@/app/issues/_componenets/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const IssueFormWrapper = ({ issue }: { issue?: Issue }) => {
  return (
    <IssueForm issue={issue} />
  )
}

export default IssueFormWrapper