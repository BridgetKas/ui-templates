import ToggleComponent from "./toggle"




function FAQ1() {
  return (
    <div className=" mt-5 flex flex-col gap-3 bg-willex w-[95%] mx-auto rounded-lg p-6 sm:flex-row sm:items-start sm:justify-between 2xl:w-[90%] xl:justify-around">
        <div className="pb-8 sm:w-[47%] 2xl:w-[35%]">
          <h1 className="font-extrabold  text-3xl pb-3">Frequently asked <span className="text-[#2E3192]" >questions</span></h1>
          <p className=" font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea…
          </p>
          <div className="pt-4">
            <ToggleComponent
              mainText="What is Study Apply Portal?"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
              <ToggleComponent
              mainText="How long does it take to here from you?"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
              <ToggleComponent
              mainText="Consulation"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
              <ToggleComponent
              mainText="Am I eglible"
              extraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
           
          </div>
        </div>
        
    </div>
  )
}

export default FAQ1