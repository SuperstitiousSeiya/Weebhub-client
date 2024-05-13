import { Skeleton } from "@/components/ui/skeleton";

const SkeletonAnimeInfo = () => {
  return (
    <div className="py-4">
      <div className="flex gap-4 mb-8">
        <Skeleton className="h-[30rem] w-[20rem]"></Skeleton>
        <div className="w-full">
          <ul className="flex gap-2 mb-4">
            <Skeleton className="px-8 py-4"></Skeleton>
            <Skeleton className="px-8 py-4"></Skeleton>
            <Skeleton className="px-8 py-4"></Skeleton>
            <Skeleton className="px-8 py-4"></Skeleton>
          </ul>

          <Skeleton className="w-full h-10 mb-4"></Skeleton>
          <Skeleton className="w-full h-4 mb-4"></Skeleton>
          <Skeleton className="w-full h-4 mb-4"></Skeleton>

          <Skeleton className="w-full h-4 mb-4"></Skeleton>

          <Skeleton className="w-full h-4 mb-4"></Skeleton>

          <Skeleton className="w-full h-4 mb-4"></Skeleton>

          <Skeleton className="w-full h-4 mb-4"></Skeleton>
        </div>
      </div>
      <div>
        <Skeleton className="w-[10rem] h-10 mb-4"></Skeleton>
        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>
        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>
        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>

        <Skeleton className=" h-6 mb-4 w-full"></Skeleton>
      </div>
    </div>
  );
};

export default SkeletonAnimeInfo;
