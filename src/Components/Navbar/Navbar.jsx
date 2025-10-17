import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import cart from '../Assets/cart.jpg'
import { BiCartAdd } from 'react-icons/bi';
import { useProducts } from '../../Context/ProductContext';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {getTotalCartItems} = useProducts();
    const pathToCategory = {
    "/phones": "/phones",
    "/tablets": "/tablets",
    "/laptops": "/laptops",
  };
    const [category, setCategory] = useState("");
    const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

// ---------------- Countdown Timer -----------------------------
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // ✅ define minutes and seconds BEFORE return
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // -------------------------------------------------------------


  return (
    <div>
        
    <nav className="bg-indigo-950 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-3xl font-bold">RE-World</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to='/' className="hover:text-gray-300">Home</Link>
            <Link to='/promotion' className="hover:text-gray-300">Promotion</Link>
            {/* Category Dropdown */}
              <select className="bg-gray-800 text-white p-2 rounded" value={pathToCategory[location.pathname] || "" }  onChange={handleCategoryChange} >
                <option value="" disabled>Select category</option>
                <option value="/phones">Phones</option>
                <option value="/tablets">Tablets</option>
                <option value="/laptops">Laptops</option>
              </select>
           <h1>{minutes}:{seconds < 10 ? "0" : ""}{seconds}</h1>
          <Link className='text-3xl' to='/cart'><h2><BiCartAdd/></h2></Link>
          
          <div className="relative bottom-3 right-7 p-0.5  bg-blue-500 rounded-2xl">{getTotalCartItems()}</div>
          <Link className='text-black bg-white px-9 py-4 rounded-2xl text-xl font-bold pointer hover:bg-blue-600' to='/register'>Register</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex space-x-8">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-4xl">
              {isOpen ? "✖" : "☰"}
            </button>
            <Link className='text-3xl text-black p-1 bg-blue-100 rounded-2xl hover:bg-green-300 ' to='/cart'><h2><BiCartAdd/></h2></Link>
            <div className="relative bottom-3 right-7     ">{getTotalCartItems()}</div>
             <Link className='text-black bg-white px-3 py-4 rounded-2xl  font-bold pointer hover:bg-blue-600' to='/register'>Register</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-9 ">
          <div className=" flex justify-center text-2xl space-x-16 font-bold text-black hover:text-blue-950  ">
            <Link to='/' className="text-amber-50">Home</Link>
            <Link to='/promotion' className="text-amber-50">Promotion</Link>
            </div>
          
          {/* Mobile Category Dropdown */}
          <div className="flex space-x-4">
            <select className="w-full bg-red-400 text-black text-2xl p-2 rounded" onChange={handleCategoryChange} defaultValue="" >
              <option value="" disabled>Select category</option>
              <option value="/phones">Phones</option>
              <option value="/tablets">Tablets</option>
              <option value="/laptops">Laptops</option>
            </select>
            
          </div>
            
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar