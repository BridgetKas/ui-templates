import { NavLink} from 'react-router-dom'


const labels =[
    {
        label:"GENERAL",
        id:1,
        path:'/general'
    },
    {
        label:"ADMISSION",
        id:2,
        path:'/admission'
    },
    {
        label:"COURSES",
        id:3,
        path:'/courses'
    },
    {
        label:"CAREER",
        id:4,
        path:'/career'
    },
    {
        label:"OTHERS",
        id:5,
        path:'/others'
    }
]

function Faqlabels() {
  return (
    <div className="w-1/2 mx-auto">
        <ul className="flex items-center justify-between mt-8">
            {
            labels.map((link)=> (
              <li key={link.id}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "text-white bg-[#2E3192]" : ""}
                  style={{
                    padding:"8px",
                    border: "1px solid gray"

                  }}
                >
                  {link.label}
                </NavLink>
            </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Faqlabels
