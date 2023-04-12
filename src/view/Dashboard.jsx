import React from 'react'
import { Link } from 'react-router-dom'
import Widget from '../components/Widget/widget';
import { FiUsers } from "react-icons/fi"
import { BiCategoryAlt } from "react-icons/bi"
import { RiCoupon2Line } from "react-icons/ri"
import { BsCoin } from "react-icons/bs"
import { AiOutlineScan, AiOutlineQrcode } from "react-icons/ai";
import { TfiMedall } from "react-icons/tfi";
import { MdBarChart, MdCardMembership, MdOutlineDiscount } from "react-icons/md";
import Card from '../components/Card';

export default function Dashboard() {
    return <div className='p-8'>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
            <Widget
                icon={<FiUsers className="h-7 w-7" />}
                title={"Total User"}
                data={"13174"}
                subtitle={"All Registered User Data"}
            />
            <Widget
                icon={<BiCategoryAlt className="h-6 w-6" />}
                title={"Active Product"}
                data={"40"}
                subtitle={"All Active Product Data"}
            />
            <Widget
                icon={<MdOutlineDiscount className="h-6 w-6" />}
                title={"Product Promo"}
                data={"0"}
                subtitle={"All Active Promo Data"}
            />
            <Widget
                icon={<RiCoupon2Line className="h-7 w-7" />}
                title={"Total Voucher"}
                data={"2"}
                subtitle={"All Active Voucher Data"}
            />
            <Widget
                icon={<BsCoin className="h-6 w-6" />}
                title={"Point Redeemed"}
                data={"26.828.286"}
                subtitle={"All QR Code point redeemed"}
            />
            <Widget
                icon={<AiOutlineScan className="h-6 w-6" />}
                title={"Unpaired QR Code"}
                data={"3.955"}
                subtitle={"All Unpaired Qr Code Data"}
            />
            <Widget
                icon={<AiOutlineQrcode className="h-7 w-7" />}
                title={"Adjustable QR Code"}
                data={"1.475.545"}
                subtitle={"All QR Code with default point"}
            />
            <Widget
                icon={<MdCardMembership className="h-6 w-6" />}
                title={"Membership"}
                data={"66"}
                subtitle={"Total User With Bronze Badge"}
            />
            <Widget
                icon={<TfiMedall className="h-6 w-6" />}
                title={"Out Of Range Users"}
                data={"192"}
                subtitle={"Total user with Out Of Range Badge"}
            />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card extra="!p-[20px] text-center shadow-md">
                <div className="flex flex-row justify-between ">
                    <span className="text-xl font-bold text-black ">Order Summary</span>
                    <div className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                        <MdBarChart className="h-6 w-6" />
                    </div>

                </div>
                <div className='border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700'></div>
                <div className="mt-1 flex flex-row justify-between hover:bg-gray-100 p-5">
                    <div className='flex flex-col items-start'>
                        <span className="text-md font-semibold text-black ">Unpaid Order</span>
                        <span className="text-md font-medium text-black ">Order created but not paid yet.</span>
                    </div>
                    <div className='h-8 2-10 bg-blue-500 rounded-lg flex items-center justify-center text-white p-3 shadow-md'> 443 Orders</div>


                </div>
                <div className='border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700'></div>
                <div className="mt-1 flex flex-row justify-between hover:bg-gray-100 p-5">
                    <div className='flex flex-col items-start'>
                        <span className="text-md font-semibold text-black ">Paid Order</span>
                        <span className="text-md font-medium text-black ">Order created but not paid yet.</span>
                    </div>
                    <div className='h-8 2-10 bg-amber-500 rounded-lg flex items-center justify-center text-white p-3 shadow-md'> 385 Orders</div>


                </div>
                <div className='border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700'></div>
                <div className="mt-1 flex flex-row justify-between hover:bg-gray-100 p-5">
                    <div className='flex flex-col items-start'>
                        <span className="text-md font-semibold text-black ">Processing Order</span>
                        <span className="text-md font-medium text-black ">Order created but not paid yet.</span>
                    </div>
                    <div className='h-8 2-10 bg-amber-500 rounded-lg flex items-center justify-center text-white p-3 shadow-md'> 348 Orders</div>


                </div>
                <div className='border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700'></div>
                <div className="mt-1 flex flex-row justify-between hover:bg-gray-100 p-5">
                    <div className='flex flex-col items-start'>
                        <span className="text-md font-semibold text-black ">Cancel Order</span>
                        <span className="text-md font-medium text-black ">Order created but not paid yet.</span>
                    </div>
                    <div className='h-8 2-10 bg-red-500 rounded-lg flex items-center justify-center text-white p-3 shadow-md'> 244 Orders</div>


                </div>
                <div className='border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700'></div>
                <div className="mt-1 flex flex-row justify-between hover:bg-gray-100 p-5">
                    <div className='flex flex-col items-start'>
                        <span className="text-md font-semibold text-black ">Unpaid Order</span>
                        <span className="text-md font-medium text-black ">Order created but not paid yet.</span>
                    </div>
                    <div className='h-8 2-10 bg-green-500 rounded-lg flex items-center justify-center text-white p-3 shadow-md'> 378 Orders</div>


                </div>


            </Card>
            <Card extra="!p-[20px] text-center">
                <div className="flex justify-between">
                    <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
                        <MdBarChart />
                        <span className="text-sm font-medium text-gray-600">This month</span>
                    </button>
                    <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                        <MdBarChart className="h-6 w-6" />
                    </button>
                </div>


            </Card>
        </div>

    </div>
}


