import React from 'react'
import MSI_Hero from '../Assets/MSI_Hero.avif'
import Asus from '../Assets/Asus.jpg'
import buy from '../Assets/buy.png'
import Iphone_hero from '../Assets/Iphone_hero.avif'
const Hero = () => {
  return (
    <div>
      <div className="hero font-serif bg-gradient-to-t from-blue-400 via-blue-300 to-purple-100  h-32 sm:h-48 md:h-64 lg:h-screen flex">
        <div className="flex flex-col justify-center gap-5 pl-10 sm:pl-20 md:pl-28 lg:pl-36 xl:pl-44 leading-[1.1] flex-1">
          <h1 className='text-5xl font-bold text-gray-800 '>Welcome to RE World</h1>
          <h2 className='text-2xl font-bold text-red-900 ml-12'>We have Electronic products</h2>
          <div className="p-15 bg-cyan-600 items-center w-1/2 rounded-2xl">
            <div className="flex">
              <p className='mb-9 text-4xl text-fuchsia-950 font-semibold'>Phones</p>
              <span><img src={buy} alt="" /></span>
            </div>
            <div className="flex">
              <p  className='mb-9 text-4xl text-fuchsia-950 font-semibold'>Tablets</p>
              <span><img src={buy} alt="" /></span>
            </div>
            <div className="flex">
              <p className="mb-9 text-4xl text-fuchsia-950 font-semibold">Laptops</p>
              <span><img src={buy} alt="" /></span>
            </div>
          </div>
        </div>
        <div className="items-center mt-20 w-1/2 ">
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
            <img src={MSI_Hero} alt="" className='w-72 rounded-2xl mb-2'/>
            <img src={Asus} alt="" className='w-72 rounded-2xl mb-3'/>
            <img src={Iphone_hero} alt="" className='w-72 rounded-2xl mb-3'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero