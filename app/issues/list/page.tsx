import Pagination from "@/app/components/Pagination";
import { Status } from "@/app/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import IssueActions from "./IssueActions";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import { Suspense } from "react";

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
    <Flex direction="column" gap="3">
      <Suspense>
        <IssueActions />
      </Suspense>
      <IssueTable searchParams={searchParams} issues={issues} />

      <Suspense>
      <Pagination
        pageSize={pageSize}
        currentPage={pages}
        itemCount={issueCount}
      />
    </Suspense>
    </Flex>
  );
};

export default IssuePage;

export const metadata: Metadata = {
  title: "Issue Tracker List",
  description: "view all project issues",
};
