import React from 'react'

const AboutSection = () => {
  return (
    <section className='bg-gray-800 py-16'>
        <div className="container justify-center ">
            <div className=" w-[95%] sm:w-[80%] lg:w-[60%]  flex flex-col items-center gap-4 text-white">
                <h2 className="text-3xl">About Us</h2>
                <p className="text-center font-light">Foodmandu is the fastest, easiest and most convenient way to enjoy the best food of your favourite restaurants at home, at the office or wherever you want to.</p>
                <p className="text-center font-light">We know that your time is valuable and sometimes every minute in the day counts. That's why we deliver! So you can spend more time doing the things you love.</p>
                <a href="" className="bg-white text-black font-light px-4 py-1 uppercase text-sm rounded-sm">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
