import ToggleComp from "./toggle2"

function FAQ2() {
  return (
    <div className=" mt-5 w-[85%] mx-auto">
        <div className=" flex items-center justify-between ">
            <div className="w-1/2">
                <h1 className="font-extrabold  text-3xl pb-3">Frequently asked <span className="text-[#2E3192]" >questions</span></h1>
                <p className=" font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea…
                </p>
                <div className="text-center mt-8">
                    <button className="bg-[#2E3192] px-4 py-2.5 rounded-3xl text-white border border-[#2E3192]">Contact Us</button>

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

export default FAQ2