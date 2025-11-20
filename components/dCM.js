import { Play } from "lucide-react";

export default function dCM({ title, category, sub, gist, icon }) {
    return (
        <div className="w-full h-20 p-4 bg-brand-grey2 flex rounded-3xl overflow-hidden">

            <div className="flex-shrink-0 h-full flex items-center">
                <div className="mr-4">{ icon }</div>
                <p className="mr-4 text-xs">{ title }</p>
                <div className="w-[2px] h-full mr-4 bg-brand-grey3"></div>
            </div>
            
            <div className="flex-1 min-w-0 h-full text-[0.6rem] flex flex-col">

                <div className="flex items-center justify-between gap-2 pr-4">
                    <p className="truncate max-w-[50%]">{ category }</p>
                    <p className="truncate max-w-[50%]">{ sub }</p>
                </div>

                <div className="h-full flex flex-col justify-end pb-1">
                    <p className="text-[0.5rem] italic">{ gist }</p>
                </div>

            </div>
            
            <div className="flex-shrink-0 ml-auto flex items-center">
                <Play className="ml-2 transform rotate-90 text-brand-grey3 fill-current"></Play>
            </div>

        </div>
    )
}