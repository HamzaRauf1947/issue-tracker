import { Box } from '@radix-ui/themes'
import { Skeleton } from '@/app/components'
const IssueFormSkeleton = () => {
  return (
       <Box className="max-w-xl">
         <Skeleton height='2rem'  baseColor="#d1d5db" highlightColor="#e5e7eb" />
           <Skeleton height='23rem'  baseColor="#d1d5db" highlightColor="#e5e7eb" />
    </Box>
  )
}

export default IssueFormSkeleton