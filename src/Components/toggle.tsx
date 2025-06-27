import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";


interface ToogleProp{
  mainText:string,
  extraText:string,
}

function ToggleComponent({mainText,extraText}:ToogleProp){
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

   useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);         

  return (
    <div className="max-w-lg  py-4 ">
      <div className="flex items-center flex-row-reverse justify-between">
        <button 
          onClick={handleToggle}
          className="focus:outline-none text-white hover:text-[#03728a] transition-transform duration-200"
          aria-label={isOpen ? "Hide information" : "Show information"}
        >
          {isOpen ? <FaAngleUp size={24} /> : <FaAngleDown size={24} />}
        </button>
        <p className="ml-2 text-white font-medium text-xl">{mainText}</p>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: "max-height 0.3s ease",
          overflow: "hidden"
        }}
        className="mt-2 border-b border-gray-200  px-4 text-white font-light"
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
  

export default ToggleComponent