import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import IssueFormWrapper from "../../_componenets/IssueFormWrapper";




interface Props {
  params: Promise<{ id: string }>;
}
const EditIssuePage =async ({params}:Props) => {
     const { id } = await params;
     const issueId = parseInt(id);
     const issue = await prisma.issue.findUnique({
        where:{id:issueId}
     });

     if(!issue) notFound();

  return (
   <IssueFormWrapper issue={issue}/>
  )
}

export default EditIssuePage