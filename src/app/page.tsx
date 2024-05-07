"use client";

import { HomeCarousel } from "@/components/home/HomeCarousel";
import PopularSide from "@/components/home/PopularSide";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import WeebCard, { Anime } from "@/components/weebui/WeebCard";
import { fetchPopular } from "@/lib/api/api";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [popularAnime, setPopularAnime] = useState<Anime[] | null>(null);

  useEffect(() => {
    loadPopular();
  }, []);

  useEffect(() => {
    console.log(popularAnime);
  }, [popularAnime]);

  const loadPopular = async () => {
    setLoading(true);
    const popular = await fetchPopular();
    setLoading(false);
    setPopularAnime(popular?.results);
  };

  return (
    <>
      <section className="px-4 xl:grid py-2 gap-4 container" id="home-section">
        {/* left section  */}
        <div className="flex flex-col gap-6 pt-2">
          <HomeCarousel className=""></HomeCarousel>

          <div className="bg-secondary py-4 rounded-md">
            <h1 className=" px-4 border-b border-primary-foreground pb-2 text-2xl font-bold">
              Popular Today
            </h1>

            {/* popular cards  */}

            <div
              id="popular-cards"
              className="flex gap-4 mt-2  flex-wrap justify-center"
            >

              {
                !loading ? (
                   popularAnime?.map((anime, index) => (
                     <WeebCard key={index} {...anime}></WeebCard>
                   ))
                ): <Loader className="animate-spin" />    
              }
           
             
            </div>
          </div>
        </div>

        {/* right section  */}

        <div className="max-lg:pt-4 pt-2 hidden xl:flex">
          <PopularSide></PopularSide>
        </div>
      </section>
    </>
  );
}
