"use client";
import { redirect } from "next/navigation";



const Page = ({ params }: { params: { animeId: string } }) => {
  redirect("/anime/info/" + params.animeId);

};

export default Page;
