import React from "react";
import { BookOpenText, ChartPie, ListTree, CircleUser, Plus } from "lucide-react";

export default function Nav() {
  return (

    <div className="absolute bottom-0 left-0 w-full z-50 pointer-events-none">
      <div className="relative w-full h-20 bg-neutral-900 border-t border-white/10 pointer-events-auto flex items-center justify-between px-6 pb-2">
        <button className="flex flex-col items-center justify-center w-16 h-full text-gray-400 hover:text-white transition-colors group">
          <BookOpenText className="w-6 h-6 mb-1 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[10px] font-medium">Learning</span>
        </button>

        <button className="flex flex-col items-center justify-center w-16 h-full text-gray-400 hover:text-white transition-colors mr-6 group">
          <ChartPie className="w-6 h-6 mb-1 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[10px] font-medium">Analytics</span>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 -top-8">
          <button className="w-16 h-16 rounded-full bg-brand-purple1 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95 pointer-events-auto">
            <Plus className="w-8 h-8" strokeWidth={3} />
          </button>
        </div>

        <button className="flex flex-col items-center justify-center w-16 h-full text-gray-400 hover:text-white transition-colors ml-6 group">
          <ListTree className="w-6 h-6 mb-1 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[10px] font-medium">Data Logs</span>
        </button>

        <button className="flex flex-col items-center justify-center w-16 h-full text-gray-400 hover:text-white transition-colors group">
          <CircleUser className="w-6 h-6 mb-1 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}