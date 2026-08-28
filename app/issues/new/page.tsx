
"use client";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(
  () => import("../_componenets/IssueForm"),
  { ssr: false,
    loading:()=><IssueFormSkeleton/>
   }
);

const NewIssuePage = () => {
  return (
    <IssueForm/>
  )
}

export default NewIssuePage