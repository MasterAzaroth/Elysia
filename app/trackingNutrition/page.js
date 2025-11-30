"use client";

import { useState } from "react";
import Search from "../../components/global/search.js";
import FCard from "../../components/trackingNutrition/foodCard.js";

export default function FoodDatabase() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        {/* TOP: Search bar */}
        <div className="flex flex-col mb-6">
          <Search
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search foods..."
          />
          <div className="w-full h-[1px] bg-brand-grey3" />
        </div>
        <FCard />
      </main>
    </div>
  );
}