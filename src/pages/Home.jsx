import { useRef } from "react";
import Hero from "@/sections/home/Hero";
import BookTeaser from "@/sections/home/BookTeaser";
import TrailerTeaser from "@/sections/home/TrailerTeaser";
import EnterThePack from "@/sections/home/EnterThePack";
import AuthorTeaser from "@/sections/home/AuthorTeaser";
import ReviewsCarousel from "@/sections/home/ReviewsCarousel";
import JoinThePack from "@/sections/home/JoinThePack";
import RetailerMarquee from "@/components/shared/RetailerMarquee";
import useReveal from "@/hooks/useReveal";
import usePageTitle from "@/hooks/usePageTitle";

export default function Home() {
  const ref = useRef(null);
  usePageTitle();
  useReveal(ref); // runs after child pins are created (parent effects run last)

  return (
    <div ref={ref}>
      <Hero />
      <RetailerMarquee />
      <BookTeaser />
      
      <EnterThePack />
      <AuthorTeaser />
      <TrailerTeaser />
      <ReviewsCarousel />
      <JoinThePack />
    </div>
  );
}
