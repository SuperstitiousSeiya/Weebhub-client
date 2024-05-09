"use client";

import ErrorPage from "@/components/ErrorPage";
import { HomeCarousel } from "@/components/home/HomeCarousel";
import PopularSide from "@/components/home/PopularSide";
import { SkeletonCard } from "@/components/weebui/Skeletons/SkeletonCard";
import { SkeletonPopularSide } from "@/components/weebui/Skeletons/SkeletonPopularSide";
import WeebCard, { Anime } from "@/components/weebui/WeebCard";
import { fetchPopular } from "@/lib/api/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [popularAnime, setPopularAnime] = useState<Anime[] | null>(null);

  useEffect(() => {
    loadPopular();
    return () => {};
  }, []);

  const loadPopular = async () => {
    setLoading(true);
    try {
      const popular = await fetchPopular();
      setLoading(false);
      setPopularAnime(popular?.results);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="px-4 xl:grid py-2 gap-4 container" id="home-section">
        {/* left section  */}

        <div className="flex flex-col gap-6 pt-2">
          <HomeCarousel className=""></HomeCarousel>
          {error && <ErrorPage></ErrorPage>}
          <div className=" py-4 rounded-md bg-primary-foreground">
            <h1 className=" px-4 border-b border-primary-foreground pb-2 text-2xl font-bold">
              Popular Today
            </h1>

            {/* popular cards  */}

            <div
              id="popular-cards"
              className="flex gap-4 mt-2  flex-wrap justify-center"
            >
              {!loading ? (
                popularAnime?.map((anime, index) => (
                  <WeebCard key={index} {...anime}></WeebCard>
                ))
              ) : (
                <>
                  <SkeletonCard /> <SkeletonCard /> <SkeletonCard />{" "}
                  <SkeletonCard /> <SkeletonCard />
                </>
              )}
            </div>
          </div>
        </div>

        {/* right section  */}

        <div className="max-lg:pt-4 pt-2 hidden xl:flex">
          {loading ? (
            <SkeletonPopularSide></SkeletonPopularSide>
          ) : (
            <PopularSide className=" sticky top-20 bg-primary-foreground"></PopularSide>
          )}
        </div>
      </section>
    </>
  );
}
