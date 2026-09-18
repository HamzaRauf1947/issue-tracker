import { prisma } from "@/lib/prisma";
import { Table } from "@radix-ui/themes";
import { Link, IssueStatusBadge } from "@/app/components";
import IssueActions from "./IssueActions";
import { Status } from "@/app/generated/prisma/enums";
import { Issue } from "@/app/generated/prisma/client";
import NextLink from "next/link"
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Pagination from "@/app/components/Pagination";

interface Props {
  searchParams: Promise<{ status: Status,orderBy:keyof Issue,page:string }>;
}
const IssuePage = async ({ searchParams }: Props) => {
  const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
  }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];


  const params = await searchParams;
const { status,orderBy,page } = params;

  const validOrderBy = columns.map(c => c.value);
const searchParamOrderBy = validOrderBy.includes(orderBy) ? orderBy : undefined;
  const statuses = Object.values(Status);

  const searchParamStaus = statuses.includes(status) ? status : undefined;
  const where = { status };
  const pages = parseInt(page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where,
    orderBy:searchParamOrderBy? {[searchParamOrderBy]:'asc'} : undefined,
    skip:(pages-1) * pageSize,
    take:pageSize,
  });

  const issueCount = await prisma.issue.count({where})

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
               key={column.value}
               className={column.className}
               >
               <NextLink href={{
                query:{...params,orderBy:column.value}
               }}>
                   {column.label}
               </NextLink>
               {column.value === orderBy && <ArrowUpIcon className="inline"/>}
                </Table.ColumnHeaderCell>
            ))}

        
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        pageSize={pageSize}
        currentPage={pages}
        itemCount={issueCount}
      />
    </div>
  );
};

export default IssuePage;
