import React from 'react'
import MSI_Hero from '../Assets/MSI_Hero.avif'
import Asus from '../Assets/Asus.jpg'
import buy from '../Assets/buy.png'
import Iphone_hero from '../Assets/Iphone_hero.avif'
const Hero = () => {
  return (
    // flex flex-col justify-center gap-5 pl-10 sm:pl-20 md:pl-28 lg:pl-36 xl:pl-44 leading-[1.1] flex-1
    //bg-gradient-to-t from-blue-400 via-blue-300 to-purple-100
    <div className="bg-no-repeat bg-center bg-cover bg-fixed  " style={{
    backgroundImage: "url('https://www.mastertechkh.com/storage/silders/ymwXWohiEtHF6FaiW9sy5op9MllFXx-metaMTdfX2J1bmRsZXMuanBn-.jpg')"
  }}>
      <div className="hero font-serif   h-max sm:h-max md:h-max lg:h-screen  ">
        <div className="max-w-7xl mx-auto ">
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl flex justify-center sm:justify-center  text-white'>Welcome to RE World</h1>
          <h2 className='text-xl sm:text-lg md:text-3xl lg:text-5xl flex justify-center text-white'>We have Electronic products</h2>
        </div>

      <div className="flex justify-between mt-6">
          <div className=" items-center w-1/2 rounded-2xl p-7 sm:p-8 md:p-11">
            <div className="flex">
              <p className='mb-9 text-4xl text-white font-semibold'>Phones</p>
              <span><img src={buy} alt="" /></span>
            </div>
            <div className="flex">
              <p  className='mb-9 text-4xl text-white font-semibold'>Tablets</p>
              <span><img src={buy} alt="" /></span>
            </div>
            <div className="flex">
              <p className="mb-9 text-4xl text-white font-semibold">Laptops</p>
              <span><img src={buy} alt="" /></span>
            </div>
          </div>
        <div className="relative top-6 right-6 items-center  w-1/2 ">
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4 md:gap-5  ">
            <img src={MSI_Hero} alt="" className=' w-44 sm:w-44 md:w-60 rounded-2xl mb-1'/>
            <img src={Asus} alt="" className='w-44 sm:w-44 md:w-60 rounded-2xl mb-1'/>
            <img src={Iphone_hero} alt="" className='w-44 sm:w-44 md:w-60 rounded-2xl mb-1'/>
          </div>
        </div>
      </div>
        

      </div>
    </div>
  )
}

export default Hero