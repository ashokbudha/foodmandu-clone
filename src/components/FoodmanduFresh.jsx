import React from 'react'
import FreshImg from "../assets/images/5.jpg"

const FoodmanduFresh = () => {
  return (
    <section className='flex justify-center relative z-20 border-b-1 border-gray-200 w-[100vw] bg-white ' >
        <div className='container flex-col  my-16 gap-2  '>
            <h3 className='sub-title'>Foodmandu Fresh</h3>
            <a href="" className=''>
              <img src={FreshImg} alt="" />
              </a>
        </div>
    </section>
  )
}

export default FoodmanduFresh
