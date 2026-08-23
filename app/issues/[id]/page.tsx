import { prisma } from "@/lib/prisma";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetail from "./IssueDetail";
interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const issueId = parseInt(id);

  if (isNaN(issueId)) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });

  if (!issue) notFound();


  return (
    <Grid columns={{initial:"1", md:"2"}} gap="5">
    <Box>
        <IssueDetail issue={issue}/>
    </Box>
    <Box>
      <EditIssueButton issueId={issue.id}/>
    </Box>
    </Grid>
  );
};

export default IssueDetailPage;
