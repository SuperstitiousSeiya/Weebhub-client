import PopularSkeleton from "@/components/home/PopularSkeleton";
import { SkeletonCard } from "@/components/weebui/Skeletons/SkeletonCard";
import { SkeletonPopularSide } from "@/components/weebui/Skeletons/SkeletonPopularSide";

import React from "react";

const loading = () => {
  return (
    <section className="px-4 xl:grid py-2 gap-4 container" id="home-section">
      <div className="flex flex-col gap-6 pt-2">
        <SkeletonCard></SkeletonCard>

        <div className=" py-4 rounded-md bg-primary-foreground">
          <h1 className=" px-4 border-b border-primary-foreground pb-2 text-2xl font-bold">
            Popular Today
          </h1>

          {/* popular cards  */}

          <div
            id="popular-cards"
            className="flex gap-4 mt-2 p-5  flex-wrap justify-center"
          >
            <PopularSkeleton />
          </div>
        </div>
      </div>

      {/* right section  */}

      <div className="max-lg:pt-4 pt-2 hidden xl:flex">
        <SkeletonPopularSide></SkeletonPopularSide>
      </div>
    </section>
  );
};

export default loading;
