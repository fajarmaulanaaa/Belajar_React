import { useState } from "react";
import Logo from "../../assets/logoBaru.png";
import LogoWhite from "../../assets/Logo-white.png";
import Control from "../../assets/control.png";
import { BiHomeAlt, BiChat, BiUser, BiCalendar, BiSearch, BiAnalyse, BiFile, BiCategoryAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { DASHBOARD_SIDEBAR_LINK } from "../../lib/const/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
const linkClassess = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <BiHomeAlt className="icon" size={24} /> },
    { title: "Customer Review", src: <BiCategoryAlt className="icon" size={24} /> },
    { title: "Ticket", src: <BiChat className="icon" size={24} /> },
    { title: "Users", src: <BiUser className="icon" size={24} />, gap: true },
    { title: "Registration ", src: <BiCalendar className="icon" size={24} /> },
    { title: "Role & Permission", src: <BiSearch className="icon" size={24} /> },
    { title: "Product", src: <BiAnalyse className="icon" size={24} /> },
    { title: "Order ", src: <BiFile className="icon" size={24} />, gap: true },
    { title: "Scratch Code", src: <FiSettings className="icon" size={24} /> },

  ];



  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-24 "
          } bg-dark-purple  p-5  pt-8 relative duration-300`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 shadow-lg rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-1000 ${open && "rotate-[360deg]"
              }`}
          />
          {/* <img 
            src={LogoWhite}
            className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
          /> */}

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Administrator
          </h1>
        </div>
        
        <div className="mt-5 flex-1 py-8 flex flex-col gap-0.5 ">
          {DASHBOARD_SIDEBAR_LINK.map((item) => (
            <SideBarLink key={item.key} item={item} />
          ))}
        </div>
        {/* <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
             
              <div className="Container" >    {Menu.src }</div>
              
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul> */}
      </div>

    </div>

  );

  function SideBarLink({ item }) {
    const { pathname } = useLocation()
    return (

      <Link to={item.path} className={classNames(pathname === item.path ? 'text-white ' : 'text-gray-400', linkClassess)}>

        <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        `}>
          <div className="Container" >    {item.icon}</div>
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            {item.label}
          </span>
        </li>
      </Link>
    )
  }

};


export default App;

