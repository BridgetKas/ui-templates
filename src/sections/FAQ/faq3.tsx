import ToggleComp from "./toggle2"
import questionsIcon from "/src/assets/Questions-rafiki.svg"

function FAQ3() {
  return (
    <div className=" mt-5 w-[85%] mx-auto">
        <h1 className="font-extrabold  text-3xl pb-3 text-center">Frequently asked <span className="text-[#2E3192]" >questions</span></h1>
        <div className=" flex items-center flex-row-reverse justify-between ">
            <div className="w-1/2 flex flex-col items-center">
                <img src={questionsIcon} className=" w-[300px]"/>

                <p className=" font-bold text-2xl text-center">Any Questions?</p>
                <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className="text-[18px] mt-4 text-gray-800">Let me know</p>
                <input type='email' placeholder="Enter your email" className="px-[18px] py-3 rounded-md w-1/2 border-2 border-gray-500"/>
                <input type='text' placeholder="Enter your question" className="px-[18px] py-3 rounded-md w-1/2 border-2 border-gray-500 mt-4"/>
                <div className="text-center mt-2">
                    <button className="bg-[#2E3192]  px-4 py-1 rounded-3xl text-white border border-[#2E3192] shadow-lg shadow-[#2E3192]">Send</button>

                </div>

          </div>

          <div className="pt-4">
            <ToggleComp
              mainText="What is Study Apply Portal?"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
              <ToggleComp
              mainText="How long does it take to here from you?"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
              <ToggleComp
              mainText="Consulation"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
              <ToggleComp
              mainText="Am I eglible"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
           
          </div>
        </div>
        
    </div>
  )
}

export default FAQ3