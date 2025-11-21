import { Landmark } from "lucide-react";
import DCM from "../../components/dCM.js";
import Search from "../../components/search.js";
import dbConnect from "../../lib/db.js";

export default function Dictionary() {
    return (
        <main className="w-full h-full">
            
            <div className="mb-8">
                <Search></Search>
            </div>

            <div className="mb-8">
                <DCM
                    title = "Aesthetics"
                    category = "Biomechanics & Anatomy"
                    sub = "Neuromuscular & Energy Systems"
                    gist = "Simple example phrase for testing. Simple example phrase for testing."
                    definition = "Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing. Simple example phrase for testing."
                    icon = {<Landmark></Landmark>}
                />
            </div>
        
        </main>
    )
}