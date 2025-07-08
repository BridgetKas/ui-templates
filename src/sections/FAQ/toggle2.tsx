import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";


interface ToogleProp{
  mainText:string,
  extraText:string,
}

function ToggleComp({mainText,extraText}:ToogleProp){
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

   useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
      console.log(contentRef.current.scrollHeight)
      console.log(contentRef.current)
    }
  }, [isOpen]);         

  return (
    <div className="max-w-lg  py-4 shadow-md">
      <div className="flex items-center flex-row-reverse justify-between">
        <div className="bg-[#2E3192] rounded-full flex items-center justify-center p-2 mr-2">
            <button 
            onClick={handleToggle}
            className="focus:outline-none text-white  transition-transform duration-200"
            aria-label={isOpen ? "Hide information" : "Show information"}
            >
            {isOpen ? <FaAngleUp size={24} /> : <FaAngleDown size={24} />}
            </button>
        </div>

        <p className="ml-2  font-medium text-xl flex items-center justify-center">{mainText}</p>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: "max-height 0.3s ease",
          overflow: "hidden"
        }}
        className="mt-2  px-4  font-light"
      >
        <div className="py-2">
          <p>
           {extraText}
          </p>
        </div>
      </div>
    </div>
  );
  };
  

export default ToggleComp