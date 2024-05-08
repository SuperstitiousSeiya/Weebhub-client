import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 z-2">
      <Skeleton className="h-[40vw] max-h-[20rem] max-w-2/3 rounded-xl" />
      <div className="space-y-2"> 
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
