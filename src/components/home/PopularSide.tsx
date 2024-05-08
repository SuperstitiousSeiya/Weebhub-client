"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Rating } from "react-simple-star-rating";

const PopularSide = ({className}: {className?: string}) => {
  const weeklyLists = [
    {
      top: 1,
      title: "Popular Side",
      genres: ["action", "ambot", "reyver"],
      rating: 5,
    },
    {
      top: 2,
      title: "Adventure Picks",
      genres: ["adventure", "thriller", "fantasy"],
      rating: 8.5,
    },
    {
      top: 3,
      title: "Sci-Fi Selection",
      genres: ["sci-fi", "dystopian", "space"],
      rating: 8.9,
    },
    {
      top: 4,
      title: "Classic Collection",
      genres: ["drama", "romance", "classic"],
      rating: 9.2,
    },
    {
      top: 5,
      title: "Comedy Corner",
      genres: ["comedy", "satire", "humor"],
      rating: 7.6,
    },
  ];

  const monthlyLists = [
    {
      top: 1,
      title: "Epic Adventures",
      genres: ["action", "adventure", "fantasy"],
      rating: 9.7,
    },
    {
      top: 2,
      title: "Sci-Fi Spectacular",
      genres: ["sci-fi", "space", "dystopian"],
      rating: 9.5,
    },
    {
      top: 3,
      title: "Romantic Classics",
      genres: ["romance", "drama", "classic"],
      rating: 9.3,
    },
    {
      top: 4,
      title: "Thrilling Suspense",
      genres: ["thriller", "mystery", "suspense"],
      rating: 9.1,
    },
    {
      top: 5,
      title: "Comedy Gems",
      genres: ["comedy", "satire", "humor"],
      rating: 8.8,
    },
  ];

  const allLists = [
    {
      top: 6,
      title: "Fantasy Frenzy",
      genres: ["fantasy", "magic", "adventure"],
      rating: 8.3,
    },
    {
      top: 7,
      title: "Drama Delights",
      genres: ["drama", "romance", "emotional"],
      rating: 8.7,
    },
    {
      top: 8,
      title: "Action Extravaganza",
      genres: ["action", "thriller", "suspense"],
      rating: 8.9,
    },
    {
      top: 9,
      title: "Mystery Madness",
      genres: ["mystery", "suspense", "crime"],
      rating: 8.6,
    },
    {
      top: 10,
      title: "Comedy Chaos",
      genres: ["comedy", "satire", "humor"],
      rating: 7.9,
    },
    {
      top: 6,
      title: "Classic Masterpieces",
      genres: ["classic", "drama", "timeless"],
      rating: 9.0,
    },
    {
      top: 7,
      title: "Sci-Fi Classics",
      genres: ["sci-fi", "classic", "futuristic"],
      rating: 8.9,
    },
    {
      top: 8,
      title: "Romantic Rendezvous",
      genres: ["romance", "drama", "love"],
      rating: 8.8,
    },
    {
      top: 9,
      title: "Thrilling Tales",
      genres: ["thriller", "suspense", "mystery"],
      rating: 8.7,
    },
    {
      top: 10,
      title: "Horror Highlights",
      genres: ["horror", "thriller", "suspense"],
      rating: 8.5,
    },
  ];




// Adjust ratings to be rounded to the nearest 0.5
const adjustedWeeklyLists = weeklyLists.map(list => ({
    ...list,
    rating: Math.round((list.rating / 10) * 5 * 2) / 2
  }));
  
  const adjustedMonthlyLists = monthlyLists.map(list => ({
    ...list,
    rating: Math.round((list.rating / 10) * 5 * 2) / 2
  }));

  const adjustedAllTimeLists = allLists.map(list => ({
    ...list,
    rating: Math.round((list.rating / 10) * 5 * 2) / 2
  }));
  

  // console.log(adjustedAllTimeLists)
  return (
    <div className={`rounded-lg h-fit ${className}`}>
      <h1 className="font-semibold text-xl px-4 py-2 border-b border-white ">
        Popular
      </h1>
      <div className="Menu">
        <Tabs defaultValue="weekly">
          <TabsList className="grid bg-primary-foreground w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="px-4">
            <div className="flex flex-col gap-4 py-4">
              {adjustedWeeklyLists.map((list, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="img-container basis-1/4">
                    <img
                      src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="basis-3/4">
                    <h1 className="title font-bold text-lg">{list.title}</h1>
                    <h2>
                      <span className="text-white opacity-50">Genres:</span>{" "}
                      {list.genres.join(", ")}
                    </h2>
                    <Rating initialValue={list.rating} size={25} />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="px-4">
            <div className="flex flex-col gap-4 py-4">
              {adjustedMonthlyLists.map((list, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="img-container basis-1/4">
                    <img
                      src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="basis-3/4">
                    <h1 className="title font-bold text-lg">{list.title}</h1>
                    <h2>
                      <span className="text-white opacity-50">Genres:</span>{" "}
                      {list.genres.join(", ")}
                    </h2>
                    <Rating initialValue={list.rating} size={25} />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="all" className="px-4">
          <div className="flex flex-col gap-4 py-4  max-h-[30rem] overflow-auto">
              {adjustedAllTimeLists.map((list, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="img-container basis-1/4">
                    <img
                      src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="basis-3/4">
                    <h1 className="title font-bold text-lg">{list.title}</h1>
                    <h2>
                      <span className="text-white opacity-50">Genres:</span>{" "}
                      {list.genres.join(", ")}
                    </h2>
                    <Rating initialValue={list.rating} size={25} />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PopularSide;
