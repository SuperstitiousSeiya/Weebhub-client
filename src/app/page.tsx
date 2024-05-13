import AnimePopularList from "@/components/anime/AnimePopularList";
import { HomeCarousel } from "@/components/home/HomeCarousel";
import PopularSide from "@/components/home/PopularSide";


import { useAnime } from "@/lib/hooks/useAnime";


export default async function Home() {
  const { getTopAiring, getAnimeInfo } = useAnime();
  const topAiring = await getTopAiring();
  const infos = await Promise.all(
    topAiring.map(async (info: any) => {
      const animeInfo = await getAnimeInfo(info.id);
      return animeInfo.description;
    })
  );

  return (
    <>
      <section className="px-4 xl:grid py-2 gap-4 container" id="home-section">
        <div className="flex flex-col gap-6 pt-2">
          <HomeCarousel topAiring={topAiring} animeId={infos}></HomeCarousel>

          <div className=" py-4 rounded-md bg-primary-foreground">
            <h1 className=" px-4 border-b border-primary-foreground pb-2 text-2xl font-bold">
              Popular Today
            </h1>

            {/* popular cards  */}

            <div
              id="popular-cards"
              className="flex gap-4 mt-2 p-5  flex-wrap justify-center"
            >
              <AnimePopularList />
            </div>
          </div>
        </div>

        {/* right section  */}

        <div className="max-lg:pt-4 pt-2 hidden xl:flex">
          <PopularSide className=" sticky top-20 bg-primary-foreground"></PopularSide>
        </div>
      </section>
    </>
  );
}
