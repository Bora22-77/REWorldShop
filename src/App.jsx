import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Promotion from './Pages/Promotion'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          <Route path='/phones' element={<ShopCategory category="Phone"/>}/>
          <Route path='/tablets' element={<ShopCategory category="Tablet"/>}/>
          <Route path='/laptops' element={<ShopCategory category="Laptop"/>}/>
          <Route path="/product" element={ <Product/>}>
            <Route path=":productId" element={ <Product/>}/>
          </Route>
          {/* <Route path="/product" element={<Product/>} /> */}
          {/* <Route path="/product/:productId" element={<Product/>}/> */}
        </Routes>
        <Footer/>
    </div>
  )
}

export default App