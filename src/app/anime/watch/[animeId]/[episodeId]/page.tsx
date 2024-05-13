import { AnimeInfo } from "@/components/anime/AnimeInfo";
import AnimeWatch from "@/components/anime/AnimeWatch";
import { useAnime } from "@/lib/hooks/useAnime";

type Props = {
  params: { animeId: string; episodeId: string };
};




const Page = async({ params }: Props) => {
  const {getWatchAnime, getAnimeInfo } = useAnime();

  const data = await getWatchAnime(params.animeId,params.episodeId)
  
  const source = data.sources.find((source: any) => source.quality === "default")?.url;

  if(!source ) return
  const animeData: AnimeInfo = await getAnimeInfo(params.animeId)
  



  return (
    <div className="container text-white mx-auto p-4">
      <AnimeWatch source={source} animeInfo={animeData} currentEpisode={params.episodeId}></AnimeWatch>
    </div>
  );
};

export default Page;
