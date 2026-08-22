import { Box } from "@radix-ui/themes"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
         <Skeleton  baseColor="#d1d5db" highlightColor="#e5e7eb" />
           <Skeleton height='5rem'  baseColor="#d1d5db" highlightColor="#e5e7eb" />
    </Box>
  )
}

export default LoadingNewIssuePage