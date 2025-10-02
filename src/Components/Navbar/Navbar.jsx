import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import cart from '../Assets/cart.jpg'
import { BiCartAdd } from 'react-icons/bi';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
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
        
    <nav className="bg-gray-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold">RE-World</h2>
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-2xl">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link to='/' className="hover:text-gray-300">Home</Link>
          <Link to='/promotion' className="hover:text-gray-300">Promotion</Link>
          {/* Mobile Category Dropdown */}
            <select className="w-full bg-gray-800 text-white p-2 rounded" onChange={handleCategoryChange} defaultValue="" >
              <option value="" disabled>Select category</option>
              <option value="/phones">Phones</option>
              <option value="/tablets">Tablets</option>
              <option value="/laptops">Laptops</option>
            </select>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar