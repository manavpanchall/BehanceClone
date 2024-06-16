import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const DropdownMenu = ({ onSort }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Recommended");
    const categories = ["Recommended", "Curated", "Most Appreciated", "Most Viewed", "Most Discussed", "Most Recent"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (category) => {
        onSort(category);
        setSelectedCategory(category);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="recm-item">
                <span className="text-xs font-bold text-[#626161]">Sort By</span>
                <div
                    className={`flex items-center cursor-pointer border-2 px-2 py-1 rounded w-40 justify-between ${isOpen || selectedCategory !== "Recommended" ? 'border-blue-500' : 'border-gray-300'
                        }`}
                    onClick={toggleDropdown}
                >
                    <p className={`text-sm font-medium pr-1 ${isOpen || selectedCategory !== "Recommended" ? 'text-blue-500' : 'text-black'}`}>
                        {selectedCategory}
                    </p>
                    <MdArrowDropDown className={`${isOpen || selectedCategory !== "Recommended" ? 'text-blue-500' : 'text-black'}`} />
                </div>
            </div>
            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`w-full text-left px-4 py-2 text-sm ${selectedCategory === category ? 'text-blue-500' : 'text-gray-700'} hover:bg-gray-200`}
                            onClick={() => handleOptionClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;