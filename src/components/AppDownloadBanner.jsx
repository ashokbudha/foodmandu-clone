import React from 'react'
import downloadImg from "../assets/images/download_app_frame.png"
import itunesImg from "../assets/images/itunes-app-store-logo.png"
import playstoreImg from "../assets/images/google-play-store-logo.png"

const AppDownloadBanner = () => {
  return (
    // border-1 border-black
   <section className='py-16'>
    <div className="container flex-col md:flex-row ">
        {/* download content */}
        <div className="w-[100%] sm:w-[70%]  md:w-[50%] flex flex-col justify-center  gap-3">
            <h2 className=' text-xl sm:text-4xl font-bold text-secondary'>Download the app</h2>
            <p className="text-secondary">Always on the go</p>
            <p className="text-secondary">Food - whenever and wherever you want it!</p>
            <div className='flex gap-3 '>
                <a href="" className='decoration-0'><img src={itunesImg} alt=""  className='h-8'/></a>
                <a href="" className='decoration-0'><img src={playstoreImg} alt="" className='h-8 ' /></a>
            </div>

        </div>

        {/* downlaod image */}
        <div className="  md:w-[50%]">
            <img src={downloadImg} alt="" />
        </div>
    </div>
   </section>
  )
}

export default AppDownloadBanner
