import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonPagination() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[30rem] w-full rounded-xl" />
     
    </div>
  )
}
