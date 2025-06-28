import FAQ1 from "./faq"
import FAQ2 from "./faq2"
import FAQ3 from "./faq3"
import FAQ4 from "./faq4"

function MainFAQ() {
  return (
    <div>
        <p className="text-2xl text-center font-bold mt-5">Demo1</p>
        <FAQ1/>
        <p className="text-2xl text-center font-bold mt-5">Demo2</p>
        <FAQ2/>
        <p className="text-2xl text-center font-bold mt-5">Demo3</p>
        <FAQ4/>
        <p className="text-2xl text-center font-bold mt-5">Demo4</p>
        <FAQ3/>


    </div>
  )
}

export default MainFAQ