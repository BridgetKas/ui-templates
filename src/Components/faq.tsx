import ToggleComponent from "./toggle"




function Services() {
  return (
    <div className=" mt-5 flex flex-col gap-3 bg-willex w-[95%] mx-auto rounded-lg p-6 sm:flex-row sm:items-start sm:justify-between 2xl:w-[90%] xl:justify-around">
        <div className="pb-8 sm:w-[47%] 2xl:w-[35%]">
          <h1 className="font-extrabold text-white text-3xl pb-3">Our Services</h1>
          <p className="text-white font-light">Get the best value for your vechile with our transparent 
            and genuine high quality sparse parts straight from the manufactures.
          </p>
          <div className="pt-4">
            <ToggleComponent
              mainText="Consulation"
              extraText="Yes, you can try us for free for 30 days.If you want, we will provide you with a free,personalized 30-minute onboarding call to get you up and running as soon as possible."
            
            />
            <ToggleComponent
              mainText="Car Maintenance and Servicing "
              extraText="Keep your car running great with our easy and reliable maintenance and servicing."
            />
            <ToggleComponent
              mainText="Monitoring"
              extraText="We keep a close eye on your vehicle’s performance with regular monitoring to catch issues before they become problems."          
            />
          </div>
        </div>
        
    </div>
  )
}

export default Services