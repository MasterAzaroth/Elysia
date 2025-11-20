import { Search } from "lucide-react";

export default function search() {
    return(

        <div className="w-full h-full p-4 bg-brand-grey3 rounded-full flex">
            <Search className="text-brand-grey4 mr-2"></Search>
            <input 
                type="text"
                placeholder="Search"
            />
        </div>

    )
}