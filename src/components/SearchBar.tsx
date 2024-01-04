import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      onSearch('');
    }

  };
  
  const handleSearch = () => {
      onSearch(searchQuery);
    };

  return (
    <div className=" py-12 flex flex-wrap md:justify-between">
    <div className="relative drop-shadow-md">
      <IoSearch className="absolute h-5 w-5 top-5 left-5 text-secondary dark:text-white" />
      <input
        className="px-20 md:px-28 py-4 rounded-md outline-none dark:bg-default dark:text-white"
        type="search"
        placeholder="Search for country..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleSearch}
      />
    </div>
    </div>
  );
};

export default SearchBar;
