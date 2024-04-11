import { HomeCarousel } from "@/components/home/HomeCarousel";
import PopularSide from "@/components/home/PopularSide";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import WeebCard from "@/components/weebui/WeebCard";

export default function Home() {
  return (
    <>
      <section className="px-4 xl:grid py-2 gap-4" id="home-section">
        {/* left section  */}
        <div className="flex flex-col gap-6">
          <HomeCarousel className=""></HomeCarousel>

          <div className="bg-secondary py-4 rounded-md" >
            <h1 className=" px-4 border-b border-primary-foreground pb-2 text-2xl font-bold">
              Popular Today
            </h1>

            {/* popular cards  */}

            <div id="popular-cards" className="flex gap-4 mt-2  flex-wrap justify-center">
              {Array.from({length: 6}).map((_, index)=>(
                <WeebCard key={index} />
              ))}
          
            </div>
          </div>
        </div>

        {/* right section  */}

        <div>
            <PopularSide></PopularSide>
        </div>
      </section>
    </>
  );
}
