import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonPopularSide() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[50rem] w-[20rem] rounded-xl" />
    </div>
  )
}
