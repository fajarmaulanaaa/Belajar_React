import React, { Component } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import profil from "../../assets/profil.png";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Dashboard from '../../view/Dashboard';

const Header = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    return (

        <nav className="ml-5 sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
            <div className="ml-[6px]">
                <div className="h-6 w-[224px] pt-1">
                    <a
                        className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        href={location.pathname}
                    >
                        Pages
                        <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                            {" "}
                            / {location.pathname === '/' ? "Dashboard" : path}
                        </span>
                    </a>
                    {/* <div
                        className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                        to="#"
                    >
                        Dashboard
                    </div> */}
                </div>
                <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                    <div
                        to="#"
                        className=" text-3xl font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                    >
                        {location.pathname == '/' ? "Dashboard" : path}
                    </div>
                </p>
            </div>

            <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
                <button class="rounded-full bg-dark-purple text-white shadow-lg w-40 h-12 overflow-hidden flex flex-row items-center justify-center ">
                    <a className='text-sm' href='https://emkay.id'>Visit Website</a>
                    {/* <a href='emkay.id'/> */}
                    <p className="pl-3 pr-2 icon">
                        <FiArrowRight className="stroke-white h-4 w-4 text-gray-400 dark:text-white" />
                    </p>

                </button>


                {/* <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                    <p className="pl-3 pr-2 text-xl">
                        <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
                    </p>
                    <input
                        type="text"
                        placeholder="Search..."
                        class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
                    />
                </div> */}
                <span
                    className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
                // onClick={onOpenSidenav}
                >
                    <FiAlignJustify className="h-5 w-5" />
                </span>
                <div className='flex justify-end space-x-5 items-center'>
                    <GrNotification size={16} />
                    <BiUser size={16} />
                    <img src={profil}
                        alt='admin'
                        className='h-9 w-9 object-cover rounded-full'
                    />
                </div>
            </div>
        </nav >

    );
}

export default Header;