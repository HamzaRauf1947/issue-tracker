'use client'
import { Table } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./IssueActions";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (

    <div>
        <IssueActions/>
           <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue}>
            <Table.Cell>
              <Skeleton  baseColor="#d1d5db" highlightColor="#e5e7eb"  />
              <div className="block md:hidden">
                <Skeleton   baseColor="#d1d5db" highlightColor="#e5e7eb"  />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton  baseColor="#d1d5db" highlightColor="#e5e7eb"  />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton  baseColor="#d1d5db" highlightColor="#e5e7eb" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </div>
 
  );
};

export default LoadingIssuesPage;
