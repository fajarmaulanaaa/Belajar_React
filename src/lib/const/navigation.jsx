import { BiHomeAlt, BiChat, BiUser, BiCalendar, BiSearch, BiAnalyse, BiFile, BiCategoryAlt } from "react-icons/bi";

export const DASHBOARD_SIDEBAR_LINK = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <BiHomeAlt className="icon" size={24}/>
    },
    {
        key: 'ticket',
        label: 'Ticket',
        path: '/ticket',
        icon: <BiChat className="icon" size={24}/>
    },
    {
        key: 'user',
        label: 'Users',
        path: '/user',
        icon: <BiUser className="icon" size={24}/>
    },
    {
        key: 'product',
        label: 'Product',
        path: '/product',
        icon: <BiCategoryAlt className="icon" size={24}/>
    },
    
    
]