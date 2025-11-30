"use client";

import OverviewNavbar from "@/components/global/overviewNavbar";
import DaySwitch from "@/components/overviewNutrition/daySwitch.js";
import Pill from "@/components/overviewNutrition/weekdayPill.js";
import MacroState from "@/components/overviewNutrition/macroState.js";
import { Flame } from "lucide-react";

export default function OverviewNutrition() {
  // Weekday labels
  const labels = ["M", "T", "W", "T", "F", "S", "S"];

  // ====== WEEK DATE CALCULATION ======
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
  const offsetToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(today);
  monday.setDate(today.getDate() + offsetToMonday);

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.getDate();
  });

  // ====== MACRO VALUES ======
  // Order: CALORIES (🔥) → PROTEIN → CARBS → FAT
  const macros = [
    { macro: "", Icon: Flame }, // Calories: icon only
    { macro: "P", Icon: null }, // Protein
    { macro: "C", Icon: null }, // Carbs
    { macro: "F", Icon: null }, // Fat
  ];

  // Example tracked values (change later when real data exists)
  const trackedValues = [2100, 120, 250, 60];

  // Example total values (goals)
  const totalValues = [2500, 180, 320, 70];

  return (
    <div className="w-full h-full">
      <OverviewNavbar />

      <div className="w-full h-[2px] my-8 bg-brand-grey3" />

      <DaySwitch />

      {/* Weekday pills */}
      <div className="w-full flex justify-between gap-2 mt-6">
        {labels.map((label, index) => (
          <Pill
            key={index}
            weekday={label}
            date={weekDates[index]}
          />
        ))}
      </div>

      {/* Macro states row */}
      <div className="w-full flex gap-4">
        {macros.map((item, index) => (
          <MacroState
            key={index}
            Icon={item.Icon}
            macro={item.macro}
            tracked={trackedValues[index]}
            total={totalValues[index]}
          />
        ))}
      </div>
    </div>
  );
}
