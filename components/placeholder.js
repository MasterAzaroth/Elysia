"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function DCM({ title, category, sub, gist, icon, definition }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div
      className={`
        w-full bg-brand-grey2 rounded-3xl overflow-hidden
        transition-all duration-1000 ease-in-out
        ${isOpen ? "max-h-40" : "max-h-20"}
      `}
    >
      {isOpen ? (
        // ========== EXPANDED ==========
        <div className="relative flex h-full w-full flex-col p-4">
          {/* TOP ROW: icon + title + divider  |  category + type */}
          <div className="flex items-start gap-4">
            {/* left cluster */}
            <div className="flex items-start">
              <div className="mr-4">{icon}</div>
              <p className="mr-4 text-lg font-bold text-white">{title}</p>
              <div className="w-[2px] h-12 mr-0 bg-brand-grey3" />
            </div>

            {/* right cluster: category + type (sub) */}
            <div className="flex-1 pr-8">
              <div className="flex h-12 flex-col justify-between">
                <p className="text-xs text-white mb-[2px]">{category}</p>
                <p className="text-xs text-brand-grey4">{sub}</p>
              </div>
            </div>
          </div>

          {/* arrow button pinned to top-right */}
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-4 top-4 flex items-center"
          >
            <Play
              className={`
                w-4 h-4 ml-2 text-brand-grey3 fill-current
                transform transition-transform duration-1000 ease-in-out
                ${isOpen ? "-rotate-90" : "rotate-90"}
              `}
            />
          </button>

          {/* divider under top section */}
          <div className="mt-3 mb-2 h-px w-full bg-brand-grey3" />

          {/* bottom section: gist + definition full width, centered */}
          <div className="flex flex-col gap-2">
            <p className="text-[0.5rem] italic text-brand-grey4 text-center">
              {gist}
            </p>
            {definition && (
              <p className="text-[0.5rem] text-brand-grey3 text-center">
                {definition}
              </p>
            )}
          </div>
        </div>
      ) : (
        // ========== COLLAPSED ==========
    <div
      className={`
        w-full bg-brand-grey2 flex p-4 rounded-3xl
        overflow-hidden transition-opacity duration-1000
        ${isOpen ? "h-40" : "h-20"}
      `}
    >
          <div className="flex-shrink-0 h-full flex items-center">
            <div className="mr-4">{icon}</div>
            <p className="mr-4 text-xs text-white">{title}</p>
            <div className="w-[2px] h-full mr-4 bg-brand-grey3" />
          </div>

          <div className="flex-1 min-w-0 text-[0.6rem] flex flex-col">
            <div className="flex items-center justify-between gap-2 pr-4">
              <p className="truncate max-w-[50%] text-white">{category}</p>
              <p className="truncate max-w-[50%] text-white">{sub}</p>
            </div>

            <div className="flex flex-col justify-end mt-auto">
              <p className="text-[0.5rem] italic text-brand-grey4">
                {gist}
              </p>
            </div>  
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className="flex-shrink-0 ml-auto flex items-center"
          >
            <Play
              className={`
                w-4 h-4 ml-2 text-brand-grey3 fill-current
                transform transition-transform duration-1000 ease-in-out
                ${isOpen ? "-rotate-90" : "rotate-90"}
              `}
            />
          </button>
        </div>
      )}
    </div>
  );
}
