import SideBar from './components/Sidebar';
import ContentRight from "./components/content/ContentRight";
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './view/Dashboard';
import Layout from './shared/Layout';
import ProductPage from './view/product_page/Product_Page';
import TiketPage from './view/tiket_page/Tiket_Page'
import UserPage from './view/user_page/userPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='ticket' element={<TiketPage />} />
          <Route path='user' element={<UserPage />} />
        </Route>
      </Routes>
    </Router>
    // <div className="w-full min-h-screen bg-white flex flex-row" >
    //   <SideBar />
    //   <div class=" gap-4 flex-1">
    //     <div class="col-span-2 bg-white">
    //       <section className=' bg-white'>
    //         <Header/>

    //         <div className='w-full min-h-screen bg-white/10 p-2'>
    //           {/* <h1>Body</h1> */}

    //         </div>
    //       </section>
    //     </div>

    //   </div>

    //   {/* <ContentRight /> */}
    // </div>

  );
}

export default App;
