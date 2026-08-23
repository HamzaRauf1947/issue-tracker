import { Skeleton } from '@/app/components';
import { Box } from "@radix-ui/themes";
const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
         <Skeleton  baseColor="#d1d5db" highlightColor="#e5e7eb" />
           <Skeleton height='5rem'  baseColor="#d1d5db" highlightColor="#e5e7eb" />
    </Box>
  )
}

export default LoadingNewIssuePage