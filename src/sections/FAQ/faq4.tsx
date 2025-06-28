import ToggleComp from "./toggle2"
import faqlogo from "/src/assets/FAQs-rafiki.svg"

function FAQ4() {
  return (
    <div className=" mt-5 w-[85%] mx-auto">
        <div className=" flex items-center justify-between ">
            <div className="w-1/2">
                <img src={faqlogo}/>
          </div>

          <div className="pt-4">
          <h1 className="font-extrabold  text-3xl pb-3  text-black">FAQ</h1>
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

export default FAQ4