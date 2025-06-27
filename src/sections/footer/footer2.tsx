
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn,FaInstagram,FaFacebook,FaTiktok,FaYoutube,FaRegCopyright  } from "react-icons/fa";


function Footer2() {
  return (
    <div className="bg-[#2E3192] text-gray-300 px-4 py-5">
    <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0 items-start">
            <div>
                {/* <img src={logo} className=" w-[150px]"/> */}
                <p className="text-white text-2xl px-4 pb-4 font-bold">LOGO</p>

            </div>
            <ul className="flex flex-col items-right gap-1 text-[18px] ">
                <li>Pavilion Tower</li> 
                <li>Kuala Lumpur</li> 
                <li>Malaysia</li>
            </ul>
            <div className="flex gap-2 justify-between text-xl text-gray-400 my-4">
                <FaXTwitter />
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebook />
                <FaYoutube />
                <FaTiktok />
            </div>
          
        </div>
       
        <div>
            <p className="font-semibold text-white text-xl pb-4">Discover</p>
            <ul className="flex flex-col items-right gap-2  text-[17px] ">
                <li>Register</li>
                <li> STEM Program</li>
                <li>Study Destinations</li>
                <li>Pay Now</li>
                <li>Our Partners</li>
            </ul>
        </div>
        <div>
            <p className="font-semibold  text-white text-xl pb-4">Destinations</p>
            <ul className="flex flex-col items-right gap-2  text-[17px]">
                <li>Africa</li>
                <li> Asia</li>
                <li>USA</li>
                <li>Europe</li>
                <li>Oceania</li>
            </ul>
        </div>
        <div>
            <p className="font-semibold  text-white text-xl pb-4">About</p>
            <ul className="flex flex-col items-right gap-2 text-[17px]">
                <li>Our Story</li>
                <li> Press and Media</li>
                <li>Careers</li>
                <li> Contact</li>

            </ul>
        </div>
        <div>
            <p className="font-semibold text-xl text-white pb-4">Resources</p>
            <ul className="flex flex-col items-right gap-2 text-[17px]">
                <li>Blog</li>
                <li> Events</li>
                <li>Webinar</li>
                <li>News letters</li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 my-auto">
            <p className="text-[18px]">Subscribe to our newsletter.</p>
            <div className="mt-2 relative w-[282px] flex items-center justify-center">
                <div>
                 <input type='email' placeholder="Enter your email" className="px-[18px] py-3 rounded-3xl border-2 border-[#2E3192]"/>
                </div>
                <button className="bg-[#2E3192] px-4 py-2.5 rounded-3xl text-white border border-[#2E3192] absolute right-0">Subscribe</button>
            </div>
        </div>
        </div>
        <div className="bg-gray-300 h-[0.5px] my-4"></div>
        <div className="flex items-center justify-between text-[17px]">
            <div className="flex items-center gap-1">
                <p><FaRegCopyright /></p>
                <p> 2025 StudyApplyPortal,Inc</p>
            </div>
            <div className="flex items-center gap-5">
                <p>Privacy Policy</p>
                <p>Legal</p>

            </div>
            
        </div>
  </div>

  )
}

export default Footer2