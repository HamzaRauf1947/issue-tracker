import { prisma } from "@/lib/prisma";
import IssueForm from "../../_componenets/IssueForm"
import { notFound } from "next/navigation";


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
   <IssueForm issue={issue}/>
  )
}

export default EditIssuePage