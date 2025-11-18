import { Landmark, Play } from "lucide-react";

export default function InfoCard({ title, category, type, quote }) {
  return (
    <div className="w-full h-20 bg-brand-grey2 rounded-2xl flex mb-4">

      {/* Left section */}
      <div className="flex items-center p-4 gap-4">
        <Landmark className="text-white w-6 h-6" />
        <h3 className="text-white">{title}</h3>
        <div className="h-full w-[1px] bg-brand-grey3" />
      </div>

      {/* Middle section */}
      <div className="flex flex-col py-4">
        <div className="flex items-center gap-2">
          <p className="text-[0.6rem]">{category}</p>
          <div className="w-1 h-1 bg-brand-purple1 rounded-full" />
          <p className="text-[0.6rem]">{type}</p>
        </div>

        <p className="text-[0.5rem] mt-auto">{quote}</p>
      </div>

      {/* Right section */}
      <div className="flex items-center p-4 ml-auto">
        <Play className="text-brand-grey3 w-4 h-4 rotate-90 fill-current" />
      </div>
    </div>
  );
}
