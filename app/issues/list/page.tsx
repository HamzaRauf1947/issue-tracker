import Pagination from "@/app/components/Pagination";
import { Status } from "@/app/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import IssueActions from "./IssueActions";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: Promise<IssueQuery>;
}
const IssuePage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const { status, orderBy, page } = params;

  const searchParamOrderBy = columnNames.includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const statuses = Object.values(Status);

  const searchParamStaus = statuses.includes(status) ? status : undefined;
  const where = { status: searchParamStaus };
  const pages = parseInt(page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where,
    orderBy: searchParamOrderBy,
    skip: (pages - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction='column' gap='3'>
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />

      <Pagination
        pageSize={pageSize}
        currentPage={pages}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export default IssuePage;
