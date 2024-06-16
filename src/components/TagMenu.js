import React from 'react';
import { behanceImages, tagName } from '../Data';
import DropdownMenu from './DropdownMenu';
import { MdArrowDropDown } from 'react-icons/md';

const TagMenu = ({ setSortedItems }) => {

    const handleSort = (category) => {
        let sortedArray = [];
        if (category === 'Most Appreciated') {
            sortedArray = [...behanceImages].sort((a, b) => b.UserLike - a.UserLike);
        } else if (category === 'Most Viewed') {
            sortedArray = [...behanceImages].sort((a, b) => b.UserWatch - a.UserWatch);
        } else {
            sortedArray = [...behanceImages];
        }
        setSortedItems(sortedArray);
    };

    return (
        <div className="lg:block">
            <div className="behance-tools flex items-center justify-between pb-4 px-4">
                <div className='tags-container flex items-center overflow-x-auto space-x-2 '>
                    {tagName.map((items, index) => (
                        <div key={index} className="tools-item flex items-center border rounded-md px-1 py-2 mx-1 justify-between whitespace-nowrap">
                            <div className="t-icon">
                                {items.tagsIcon}
                            </div>
                            <div className="tname px-2">
                                <p className='text-sm font-bold'>{items.tags}</p>
                            </div>
                            <div className="dt-arrow">
                                <MdArrowDropDown />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="recm-item">
                    <DropdownMenu onSort={handleSort} />
                </div>
            </div>
        </div>
    );
}

export default TagMenu;
