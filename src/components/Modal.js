import React from 'react';
import { IoClose } from 'react-icons/io5';

const Modal = ({ show, onClose, item }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                <div className="flex justify-end">
                    <IoClose className="text-2xl cursor-pointer" onClick={onClose} />
                </div>
                <div className="cat-img relative overflow-hidden rounded-md">
                    <img src={item.featureImg} alt={item.featureImg} className="w-full" />
                    <div className="patch absolute top-0 hover:translate-y-[-5px] cursor-pointer translate-y-[-10px] right-2">
                        <img src={item.Profile} alt="" />
                    </div>
                </div>
                <div className="cat-info py-3">
                    <h4 className="font-medium text-sm hover:underline leading-[15px] text-ellipsis">{item.featureTxt}</h4>
                    <span className="text-sm hover:underline">{item.UserName}</span>
                </div>
                <div className="be-time flex justify-between">
                    <div className="be-like flex mr-2">
                        <div className="li-icon text-[#959595] mr-1 mt-[2px]">
                            {item.UserlikeIcons}
                        </div>
                        <span className="text-sm font-medium text-[#959595]">{item.UserLike}</span>
                    </div>
                    <div className="be-watch flex mr-2">
                        <div className="wa-icon text-[#959595] mr-1 mt-[2px]">
                            {item.UserwatchIcon}
                        </div>
                        <span className="text-sm font-medium text-[#959595]">{item.UserWatch}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
