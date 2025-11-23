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
        transition-all duration-700 ease-in-out
        ${isOpen ? "h-48" : "h-20"}
      `}
    >
      {isOpen ? (
        /* ========== EXPANDED ========== */
        <div className="relative flex h-full w-full flex-col p-4">
          {/* TOP ROW */}
          <div className="flex items-start gap-4">

            {/* LEFT CLUSTER (icon + title + divider, max 50%) */}
            <div className="flex w-1/2 min-w-0 items-start h-full">
              <div className="mr-4 flex-shrink-0">{icon}</div>

              <p className="mr-4 flex-1 text-lg font-bold text-white break-words leading-snug min-w-0">
                {title}
              </p>

              <div className="w-[2px] h-12 bg-brand-grey3 flex-shrink-0" />
            </div>

            {/* RIGHT CLUSTER */}
            <div className="flex-1 pr-8">
              <div className="flex h-12 flex-col justify-between">
                <p className="text-xs text-white mb-[2px]">{category}</p>
                <p className="text-xs text-brand-grey4">{sub}</p>
              </div>
            </div>
          </div>

          {/* ARROW */}
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-4 top-4 flex items-center"
          >
            <Play
              className={`
                w-4 h-4 ml-2 text-brand-grey3 fill-current
                transform transition-transform duration-700 ease-in-out
                ${isOpen ? "-rotate-90" : "rotate-90"}
              `}
            />
          </button>

          {/* DIVIDER */}
          <div className="mt-3 mb-2 h-px w-full bg-brand-grey3" />

          {/* BOTTOM CONTENT */}
          <div className="flex flex-col gap-2">
            <p className="text-[0.5rem] italic text-brand-grey4 text-center">
              {gist}
            </p>
            {definition && (
              <p className="text-[0.5rem] text-center">
                {definition}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* ========== COLLAPSED ========== */
        <div className="flex h-full w-full p-4 items-center">
          {/* LEFT CLUSTER (max 50% width, full height) */}
          <div className="flex w-1/2 min-w-0 h-full items-center">
            <div className="mr-4 flex-shrink-0">{icon}</div>

            <p className="mr-4 flex-1 text-xs text-white break-words leading-snug min-w-0">
              {title}
            </p>

            {/* VERTICAL DIVIDER — stretches to full height of cluster */}
            <div className="w-[2px] self-stretch bg-brand-grey3 flex-shrink-0 mr-4" />
          </div>

          {/* MIDDLE SECTION */}
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

          {/* ARROW */}
          <button
            type="button"
            onClick={handleToggle}
            className="flex-shrink-0 ml-auto flex items-center"
          >
            <Play
              className={`
                w-4 h-4 ml-2 text-brand-grey3 fill-current
                transform transition-transform duration-700 ease-in-out
                ${isOpen ? "-rotate-90" : "rotate-90"}
              `}
            />
          </button>
        </div>
      )}
    </div>
  );
}