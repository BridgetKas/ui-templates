import ToggleComp from "./toggle2"

function Faqs() {
  return (
    <div className="pt-4 w-1/2 mx-auto">
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

  )
}

export default Faqs

