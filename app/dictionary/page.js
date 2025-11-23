// import { Landmark } from "lucide-react";
// import DCM from "../../components/dCM.js";
// import Search from "../../components/search.js";
// import Alphabet from "../../components/alphabetSeperator.js"
// import dbConnect from "../../lib/db.js";

// export default function Dictionary() {
//     return (
//         <main className="w-full h-full">
            
//             <div className="flex flex-col mb-6">
//                 <Search></Search>
//                 <div className="w-full h-[1px] bg-brand-grey3" />
//             </div>

//             <div>
//                 <Alphabet letter = "A" />
//             </div>

//             <div>
//                 <DCM
//                     title = "Aesthetics"
//                     category = "Biomechanics & Anatomy"
//                     sub = "Neuromuscular & Energy Systems"
//                     gist = "Simple example phrase for testing. Simple example phrase for testing."
//                     definition = "Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing."
//                     icon = {<Landmark></Landmark>}
//                 />
//             </div>
        
//         </main>
//     )
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import { Landmark } from "lucide-react";

// make sure these paths are exactly correct for your folder structure
import DCM from "../../components/dCM.js";
import Search from "../../components/search.js";
import Alphabet from "../../components/alphabetSeperator.js";

export default function Dictionary() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // 1) Fetch entries from your API route
  useEffect(() => {
    async function fetchEntries() {
      try {
        const res = await fetch("/api/entries");
        if (!res.ok) {
          throw new Error(`Failed to fetch entries: ${res.status}`);
        }

        const data = await res.json();
        setEntries(data);
      } catch (err) {
        console.error("Error fetching entries:", err);
        setErrorMsg(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchEntries();
  }, []);

  // 2) Normalize, sort & group by letter
  const groupedByLetter = useMemo(() => {
    const normalized = entries
      .map((e) => {
        const letter = (e.letter || e.title?.[0] || "#").toString().toUpperCase();

        return {
          id: e._id?.toString?.() ?? e._id ?? e.title,
          title: e.title,
          category: e.category,
          sub: e.type, 
          gist: e.gist,
          definition: e.definition || "", 
          iconName: e.iconName || "Landmark",
          letter,
        };
      })
      .filter((e) => e.letter)
      .sort((a, b) => {
        if (a.letter === b.letter) {
          return a.title.localeCompare(b.title);
        }
        return a.letter.localeCompare(b.letter);
      });

    const grouped = normalized.reduce((acc, entry) => {
      if (!acc[entry.letter]) acc[entry.letter] = [];
      acc[entry.letter].push(entry);
      return acc;
    }, {});

    return grouped;
  }, [entries]);

  // 3) Icon Helper
  function renderIcon(iconName) {
    switch (iconName) {
      case "Landmark":
      default:
        return <Landmark />;
    }
  }

  // --- RENDER ---
  return (
    <main className="w-full h-full">
      <div className="flex flex-col mb-6">
        <Search />
        <div className="w-full h-[1px] bg-brand-grey3" />
      </div>

      {loading && (
        <p className="text-xs text-brand-grey4">Loading entries…</p>
      )}
      
      {!loading && errorMsg && (
        <p className="text-xs text-red-500">Error: {errorMsg}</p>
      )}

      {!loading && !errorMsg && (
        <div className="flex flex-col gap-6">
          {Object.entries(groupedByLetter).map(([letter, list]) => (
            <section key={letter}>
              <Alphabet letter={letter} />

              <div className="flex flex-col gap-4 mt-2">
                {list.map((entry) => (
                  <DCM
                    key={entry.id}
                    title={entry.title}
                    category={entry.category}
                    sub={entry.sub}
                    gist={entry.gist}
                    definition={entry.definition}
                    icon={renderIcon(entry.iconName)}
                  />
                ))}
              </div>
            </section>
          ))}
          
          {entries.length === 0 && (
            <p className="text-xs text-brand-grey4">No entries found.</p>
          )}
        </div>
      )}
    </main>
  );
}