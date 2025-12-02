import React from "react";
import CardCarousel from '../assets/components/Cards/CardCarousel';
import { programmingInfo, uiuxInfo, capstoneInfo } from '../assets/components/Cards/cardInfo';

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 pt-24" style={{ backgroundColor: "#f8fafc" }}> {/* background */}
      <div className="flex flex-col items-start max-w-3xl w-full gap-5">
        <CardCarousel title="Programming Projects" items={programmingInfo} />
        <CardCarousel title="Capstone Projects" items={capstoneInfo} />
        <CardCarousel title="UI/UX Projects" items={uiuxInfo} />
      </div>
    </div>
  );
};

export default Portfolio;
