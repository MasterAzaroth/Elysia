// "use client";

// import OverviewNavbar from "@/components/overviewNavbar";
// import DaySwitch from "@/components/daySwitch.js";
// import Pill from "@/components/weekdayPill.js";
// import MState from "@/components/macroState.js";
// import { Flame } from "@/components/macroState.js";

// export default function OverviewNutrition() {
//   const labels = ["M", "T", "W", "T", "F", "S", "S"];

//   const today = new Date();

//   const dayOfWeek = today.getDay();
//   const offsetToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

//   const monday = new Date(today);
//   monday.setDate(today.getDate() + offsetToMonday);

//   const weekDates = Array.from({ length: 7 }, (_, i) => {
//     const d = new Date(monday);
//     d.setDate(monday.getDate() + i);
//     return d.getDate();
//   });

//   const macros = [Flame ,"P", "C", "F"];

//   return (
//     <div className="w-full h-full">
//       <OverviewNavbar />
//       <div className="w-full h-[2px] my-8 bg-brand-grey3" />
//       <DaySwitch />
//       <div className="w-full flex justify-between gap-2 mt-6">
//         {labels.map((label, index) => (
//           <Pill
//             key={index}
//             weekday={label}
//             date={weekDates[index]}
//           />
//         ))}
//       </div>
//       <div>
//         {macros.map((macro, index))}
//         <MState
//             if (index === 0) {
//                 const Icon = macros[0];
//                 return <Icon key={index}/>;
//             }
//             key={index}
//             weekday={macro}
//         >

//       </div>
//     </div>
//   );
// }











// "use client";

// import OverviewNavbar from "@/components/overviewNavbar";
// import DaySwitch from "@/components/daySwitch.js";
// import Pill from "@/components/weekdayPill.js";
// import MacroState from "@/components/macroState.js";

// export default function OverviewNutrition() {
//   // Weekday labels for the pills row
//   const labels = ["M", "T", "W", "T", "F", "S", "S"];

//   // ====== WEEK DATE CALCULATION (Mon–Sun of current week) ======
//   const today = new Date();

//   const dayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
//   const offsetToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

//   const monday = new Date(today);
//   monday.setDate(today.getDate() + offsetToMonday);

//   const weekDates = Array.from({ length: 7 }, (_, i) => {
//     const d = new Date(monday);
//     d.setDate(monday.getDate() + i);
//     return d.getDate();
//   });

//   // ====== MACRO DATA (for now just from arrays) ======
//   // Macro labels
//   const macros = ["P", "C", "F", "K"]; // Protein, Carbs, Fat, Kcal (example)

//   // Tracked values (example numbers – change as needed)
//   const trackedValues = [120, 250, 60, 2100];

//   // Total goals (example numbers – change as needed)
//   const totalValues = [180, 320, 70, 2500];

//   return (
//     <div className="w-full h-full">
//       <OverviewNavbar />

//       <div className="w-full h-[2px] my-8 bg-brand-grey3" />

//       <DaySwitch />

//       {/* Weekday pills row */}
//       <div className="w-full flex justify-between gap-2 mt-6">
//         {labels.map((label, index) => (
//           <Pill
//             key={index}
//             weekday={label}
//             date={weekDates[index]}
//           />
//         ))}
//       </div>

//       {/* Macro states row */}
//       <div className="w-full flex mt-4">
//         {macros.map((macro, index) => (
//           <MacroState
//             key={macro}
//             macro={macro}
//             tracked={trackedValues[index]}
//             total={totalValues[index]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }






"use client";

import OverviewNavbar from "@/components/overviewNavbar";
import DaySwitch from "@/components/daySwitch.js";
import Pill from "@/components/weekdayPill.js";
import MacroState from "@/components/macroState.js";
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
      <div className="w-full flex gap-2">
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
