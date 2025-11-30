// import { Egg, Flame, Plus } from "lucide-react";

// export default function foodCard() {

//     return (

//         <div className="w-full h-20 bg-brand-grey2 flex p-3 rounded-4xl">
//             <div className="w-auto h-full flex items-center justify-start mr-4">
//                 <Egg size={28} />
//             </div>


//             <div className="w-full h-full flex flex-col justify-between text-xs py-1 gap-1">
//                 <div className="text-lg font-bold">
//                     <p>Egg</p>
//                 </div>
//                 <div className="w-auto h-auto flex gap-2">
//                     <div className="w-auto h-auto flex gap-[2px]">
//                         <Flame size={16} />
//                         <p>8888</p>
//                     </div>
//                     <div className="w-2 h-2 rounded-full bg-brand-purple1 self-center" />
//                     <div className="w-auto h-auto flex gap-[2px]">
//                         <p>888</p>
//                         <p>P</p>
//                     </div>
//                     <div className="w-2 h-2 rounded-full bg-brand-purple1 self-center" />
//                     <div className="w-auto h-auto flex gap-[2px]">
//                         <p>888</p>
//                         <p>C</p>
//                     </div>
//                     <div className="w-2 h-2 rounded-full bg-brand-purple1 self-center" />
//                     <div className="w-auto h-auto flex gap-[2px]">
//                         <p>888</p>
//                         <p>F</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-10 flex items-center rounded-full bg-transparent border-2 border-brand-purple1 pl-3 self-center">
//                 <div className="w-8 flex items-center gap-1 text-white font-medium mr-2 relative text-sm">
//                     <p>888</p>
//                     <p className="absolute right-0">g</p>
//                 </div>
//                 <div className="h-full aspect-square rounded-full bg-brand-purple1 flex items-center justify-center text-white">
//                     <Plus size={20} strokeWidth={3} />
//                 </div>
//             </div>

//         </div>

//     )

// }





import { useState } from "react";
import { Egg, Flame, Plus, Check } from "lucide-react";

export default function FoodCard({
  Icon = Egg,          // icon component, e.g. Apple, Beef, etc.
  name = "Egg",
  calories = 0,
  protein = 0,
  carbs = 0,
  fat = 0,
  grams = 0,
  onGramsChange,       // (newValue: number) => void
  onToggleAdd,         // (isAdded: boolean) => void  (optional)
}) {
  const [isAdded, setIsAdded] = useState(false);

  function handleToggle() {
    setIsAdded((prev) => {
      const next = !prev;
      if (onToggleAdd) onToggleAdd(next);
      return next;
    });
  }

  function handleGramsChange(e) {
    const value = Number(e.target.value);
    if (onGramsChange) onGramsChange(isNaN(value) ? 0 : value);
  }

  return (
    <div className="w-full h-20 bg-brand-grey2 flex p-3 rounded-4xl">
      {/* left icon */}
      <div className="w-auto h-full flex items-center justify-start mr-4">
        <Icon size={28} />
      </div>

      {/* middle content */}
      <div className="w-full h-full flex flex-col justify-between text-xs py-1 gap-1">
        <div className="text-lg font-bold">
          <p>{name}</p>
        </div>

        <div className="w-auto h-auto flex gap-2">
          {/* calories */}
          <div className="w-auto h-auto flex gap-[2px]">
            <Flame size={16} />
            <p>{calories}</p>
          </div>

          <div className="w-2 h-2 rounded-full bg-brand-purple1 self-center" />

          {/* protein */}
          <div className="w-auto h-auto flex gap-[2px]">
            <p>{protein}</p>
            <p>P</p>
          </div>

          <div className="w-2 h-2 rounded-full bg-brand-purple1 self-center" />

          {/* carbs */}
          <div className="w-auto h-auto flex gap-[2px]">
            <p>{carbs}</p>
            <p>C</p>
          </div>

          <div className="w-2 h-2 rounded-full bg-brand-purple1 self-center" />

          {/* fat */}
          <div className="w-auto h-auto flex gap-[2px]">
            <p>{fat}</p>
            <p>F</p>
          </div>
        </div>
      </div>

      {/* grams pill + toggle button */}
      <div className="h-10 flex items-center rounded-full bg-transparent border-2 border-brand-purple1 pl-3 self-center">
        {/* grams input with 'g' pinned on the right */}
        <div className="w-12 flex items-center mr-2 relative text-sm">
          <input
            type="number"
            className="bg-transparent outline-none w-full pr-3 text-white font-medium"
            value={grams}
            onChange={handleGramsChange}
          />
          <span className="absolute right-0 text-white font-medium">g</span>
        </div>

        {/* circle button */}
        <button
          type="button"
          onClick={handleToggle}
          className="h-full aspect-square rounded-full bg-brand-purple1 flex items-center justify-center text-white"
        >
          {isAdded ? (
            <Check size={20} strokeWidth={3} />
          ) : (
            <Plus size={20} strokeWidth={3} />
          )}
        </button>
      </div>
    </div>
  );
}
