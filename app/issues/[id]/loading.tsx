import { Skeleton } from '@/app/components';
import { Box, Card, Flex } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton baseColor="#d1d5db" highlightColor="#e5e7eb"/>
      <Flex className="gap-3 items-center my-2">
        <Skeleton width='5rem' baseColor="#d1d5db" highlightColor="#e5e7eb" />
        <Skeleton width='8rem' baseColor="#d1d5db" highlightColor="#e5e7eb" />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} baseColor="#d1d5db" highlightColor="#e5e7eb" />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
