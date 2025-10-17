import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Promotion from './Pages/Promotion'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'
import Cart from './Pages/Cart'
import phone_banner from './Components/Assets/phone.webp'
import laptop_banner from './Components/Assets/laptop_banner.avif'
import tablet_banner from './Components/Assets/tablet_banner.avif'
import Register from './Components/Register'

const App = () => {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          <Route path='/phones' element={<ShopCategory banner={phone_banner} category="Phone" />}/>
          <Route path='/tablets' element={<ShopCategory banner={tablet_banner} category="Tablet" />}/>
          <Route path='/laptops' element={<ShopCategory banner={laptop_banner} category="Laptop" />}/>
          <Route path="/product" element={ <Product/>}>
            <Route path=":productId" element={ <Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/register" element={<Register/>}/>
          {/* <Route path="/product" element={<Product/>} /> */}
          {/* <Route path="/product/:productId" element={<Product/>}/> */}
        </Routes>
        <Footer/>
    </div>
  )
}

export default App