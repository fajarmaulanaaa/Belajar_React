import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from "./components/Header"
import SideBar from '../components/Sidebar'
import Header from '../components/Header'

export default function Layout() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-row">
            <SideBar />
            <div class=" gap-4 flex-1">
                <div class="col-span-2 bg-white">
                    <section className=' bg-white'>
                        <Header />

                        <div className='w-full min-h-screen bg-white/10 p-2'>
                            <div className='mt-5'>{<Outlet />}</div>
                        </div> 
                    </section>
                </div>

            </div>



        </div>
    )
}
{/* <div className="w-full min-h-screen bg-white flex flex-row"> */}