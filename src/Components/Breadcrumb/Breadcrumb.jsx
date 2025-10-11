import React from 'react'
import next_icon from '../Assets/next_icon.png'
const Breadcrumb = ( {props} ) => {

  return (
    <div className='max-w-8xl max-auto '>
        <div className="flex flex-column gap-7 text-xl  justify-center font-light mb-4">
            Home <img src={next_icon} alt="" /> Select Category <img src={next_icon} alt="" /> {props.category} <img src={next_icon} alt="" />{props.name}
        </div>
    </div>
  )
}

export default Breadcrumb