import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5';
import { behanceImages, searchElements } from '../Data';
import { MdArrowDropDown } from 'react-icons/md';

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const filtered = behanceImages
                .filter((item) =>
                    item.UserName.toLowerCase().startsWith(value.toLowerCase())
                )
                .map((item) => item.UserName);
            setFilteredSuggestions([...new Set(filtered)]);
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div className="search-area p-5">
            <div className="search-area flex items-center">
                <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                    <div className="input-box lg:w-full">
                        <input type="text" name="" placeholder='Search the creative world at work' className='bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]' value={query} onChange={handleInputChange} id="" />
                        {filteredSuggestions.length > 0 && (
                            <div className="">
                                <ul className="z-10 absolute left-0 right-0 mt-3 bg-white border border-gray-300 rounded-md shadow-lg w-1/2 border-none ml-16 font-bold">
                                    {filteredSuggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="p-2 cursor-pointer hover:bg-gray-300 rounded-md"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className='relative'>
                            <div className="search-icon text-2xl text-[#777] absolute bottom-[2px] left-6">
                                <IoSearchSharp />
                            </div>
                        </div>
                    </div>
                    <div className="tags-search bg-white px-4 py-3 border-l-2 ">
                        <ul className='flex items-center'>
                            <li className=' text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm'><a href="">Projects</a></li>
                            <div className="dt-arrow block lg:hidden">
                                <MdArrowDropDown />
                            </div>
                            {
                                searchElements.map((tags) => (
                                    <li className='mx-1 font-medium text-sm py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]'><a href="">{tags.SearchItems}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
