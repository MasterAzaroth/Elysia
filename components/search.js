import { Search } from "lucide-react";

// components/SearchBar.js
export default function SearchBar({ value, placeholder }) {

  return (
    <div className="w-full flex items-center bg-brand-grey3 p-4 mb-4 rounded-full">
      <Search className="mr-2"></Search>
      <input
        type="text"
        value={value}
        placeholder="Search"
      />
    </div>
  );
}
