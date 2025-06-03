import React from "react";
import itunesImg from "../assets/images/itunes-app-store-logo.png"
import playstoreImg from "../assets/images/google-play-store-logo.png"

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container flex-col font-light">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-1 md:gap-3 pb-8">
          <div className="  flex flex-col gap-12">
            <ul className="flex flex-col gap-1.5">
              <li>
                <h3 className="sub-title ">We're Foodmandu</h3>
              </li>
              <li>About Us</li>
              <li>Available Areas</li>
              <li>Delivery Charges</li>
              <li>Blogs</li>
            </ul>
            <ul className="">
                <li className="text-sm"><h3 className="sub-title inline">Service Hour: </h3>08:00 AM to 9:00 PM (NST)</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-1.5">
              <li>
                <h3 className="sub-title">Get Help</h3>
              </li>
              <li>How to Order?</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-1.5">
              <li>
                <h3 className="sub-title">Call us</h3>
              </li>
              <li>
                Our helpline stays the same across Kathmandu, Bhaktapur,
                Chitwan, and Butwal for seamless support.
              </li>
              <li>
                <h3 className="sub-title">Contact Details</h3>
              </li>
              <li>5970477, 4544177, 4540979, 9802034008</li>
            </ul>
          </div>
          <div className="  ">
            <ul className="flex flex-col gap-1.5"> 
              <li>
                <h3 className="sub-title">Download App</h3>
              </li>
              <li className="flex flex-col lg:flex-row gap-2">
                <a href=""><img src={itunesImg} alt="" className="h-10"/></a>
                 <a href=""><img src={playstoreImg} alt="" className="h-10" /></a>
              </li>
              <li>
                <h2 className="sub-title">Connect with Us</h2>
              </li>
              <li>social-links</li>
            </ul>
          </div>
        </div>
        <div className="  flex flex-col sm:flex-row justify-between text-sm pt-3 border-t-1 border-gray-200  gap-1" >
            <div>
                <a href="">Terms of Usage</a>
                <a href="">Privacy Policy</a>
            </div>
            <p>© 2020 Foodmandu Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
