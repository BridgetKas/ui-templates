import React from 'react'
import { FaXTwitter,FaThreads,FaPinterest } from "react-icons/fa6";
import { FaLinkedinIn,FaInstagram,FaFacebook,FaTiktok,FaReddit,FaYoutube,FaRegCopyright  } from "react-icons/fa";


function Footer1() {
  return (
    <div className="bg-[#2E3192] text-gray-300 px-10 py-5 flex items-start justify-between">
        <div>
            <p className="text-[18px]">Subscribe to our newsletter with your email.</p>
            <div className="mt-5 relative w-[282px]  flex items-center">
                <div>
                 <input type='email' placeholder="Enter your email" className="px-[17px] py-3 rounded-3xl border-2 border-[#2E3192]"/>
                </div>
                <button className="bg-[#2E3192] px-4 py-2.5 rounded-3xl text-white border border-[#2E3192] absolute right-0">Subscribe</button>
            </div>
            <div className="flex items-center justify-between text-xl text-gray-400 my-8">
                <FaXTwitter />
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebook />
                <FaThreads />
                <FaYoutube />
                <FaTiktok />
                <FaPinterest />
                <FaReddit />
            </div>
            <div className="flex items-center gap-1">
                <p><FaRegCopyright /></p>
                <p> 2025 StudyApplyPortal, Inc</p>

            </div>
        </div>
        <div>
            <p className="font-semibold text-xl text-white">Location</p>
            <ul className="flex flex-col items-right gap-1">
                <li>Pavilion Tower</li> 
                <li>Kuala Lumpur</li> 
                <li>Malaysia</li>
            </ul>
        </div>
        <div>
            <p className="font-semibold text-xl text-white">Discover</p>
            <ul className="flex flex-col items-right gap-1">
                <li>Register</li>
                <li> STEM Program</li>
                <li>Study Destinations</li>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Referral Program</li>
                <li>School Registration</li>
               <li>Events</li> 
                <li>Pay Now</li>
            </ul>
        </div>
        <div>
            <p className="font-semibold text-xl text-white">Legal</p>
            <ul className="flex flex-col items-right gap-1">
                <li>Privacy and Cookies Policy</li>
                <li> Terms and Conditions</li>
                <li>Student Authorization Form</li>
                <li>StudyApplyPortal Fees</li>
                <li>Recruitment Partner Terms</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer1