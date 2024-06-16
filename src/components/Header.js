import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { IoClose, IoSearchSharp } from 'react-icons/io5';
import { adobeLogo, behance_logo } from '../Data';
import SearchBar from './SearchBar';
import TagMenu from './TagMenu';

const openMenu = () => {
    const main_header = document.getElementById('header');
    main_header.classList.toggle('menuopen');
};

const closeMenu = () => {
    openMenu();
};


const Header = ({ setSortedItems }) => {

    return (
        <header className='header' id='header'>
            {/* for mobile view */}
            <div id='menu' className='menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 p-5 z-20'>
                <div className='text-3xl absolute right-3 cursor-pointer text-[#333]' onClick={closeMenu}>
                    <IoClose />
                </div>
                <ul className=''>
                    <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></li>
                    <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Livestreams</a></li>
                    <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                </ul>
            </div>

            <div className='border-b fixed w-full top-0 bg-white z-10'>
                <div className="container-fluid">
                    <div className="top-header py-4 lg:py-3 px-5 border-b border ">
                        <div className="navbar flex items-center justify-between">
                            {/* For Desktop view */}
                            <div className="brand-logo flex items-center">
                                <div className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden" onClick={openMenu}>
                                    <CgMenuLeft />
                                </div>
                                <img src={behance_logo} alt={behance_logo} className="w-auto h-4" />
                                <div className="page-links  lg:ml-8 hidden lg:block">
                                    <ul className='flex items-center'>
                                        <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></li>
                                        <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Livestreams</a></li>
                                        <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="aciton-area flex items-center">
                                    <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] ">
                                        <a href="" className='text-[#0057ff] font-medium text-md'>Login</a>
                                    </div>
                                    <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                                        <a href="" className='text-white font-medium text-md'>Sign Up</a>
                                    </div>
                                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                                        <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                                        <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                                    </div>
                                </div>
                            </div>
                            <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                                <IoSearchSharp />
                            </div>
                        </div>
                    </div>
                    <SearchBar />
                    <TagMenu setSortedItems={setSortedItems} />
                </div>
            </div>
        </header>
    );
};

export default Header;
