import React, { useState } from 'react';
import Modal from './Modal';

const BehanceList = ({ sortedItems }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleImageClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    return (
        <div className="container-fluid px-4  md:mt-[160px] lg:mt-[180px]">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-3 py-5">
                {sortedItems.map((item, index) => (
                    <div key={index} className="category-item cursor-pointer">
                        <div className="cat-img relative overflow-hidden rounded-md" onClick={() => handleImageClick(item)}>
                            <img src={item.featureImg} alt={item.featureImg} />
                            <div className="patch absolute top-0 hover:translate-y-[-5px] cursor-pointer translate-y-[-10px] right-2">
                                <img src={item.Profile} alt="" />
                            </div>
                        </div>
                        <div className="cat-info flex justify-between py-3">
                            <div className="cat-name cursor-pointer">
                                <h4 className='font-medium text-sm hover:underline leading-[15px] text-ellipsis'>{item.featureTxt}</h4>
                                <span className='text-sm hover:underline'>{item.UserName}</span>
                            </div>
                            <div className="be-time flex">
                                <div className="be-like flex mr-2">
                                    <div className="li-icon text-[#959595] mr-1 mt-[2px]">
                                        {item.UserlikeIcons}
                                    </div>
                                    <span className='text-sm font-medium text-[#959595]'>{item.UserLike}</span>
                                </div>
                                <div className="be-watch flex mr-2">
                                    <div className="wa-icon text-[#959595] mr-1 mt-[2px]">
                                        {item.UserwatchIcon}
                                    </div>
                                    <span className='text-sm font-medium text-[#959595]'>{item.UserWatch}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onClose={handleCloseModal} item={selectedItem} />
        </div>
    );
};

export default BehanceList;
