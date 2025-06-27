import { NavLink , Link} from "react-router-dom"


const navBar = [
  {
    label:"NavBar",
    id:1,
    path:'/'
  },
  {
    label:"Testiomonal",
    id:2,
    path:'/testiomonal'
  },
  {
    label:"FAQ",
    id:3,
    path:'/faq'
  },
  {
    label:"Hero",
    id:4,
    path:'/hero'
  },
  {
    label:"Portifolio",
    id:5,
    path:'/portifolio'
  },
  {
    label:"Destinations",
    id:6,
    path:'/destinations'
  },
  {
    label:"Audience",
    id:7,
    path:'/audience'
  },
  {
    label:"Services",
    id:8,
    path:'/services'
  },
  {
    label:"Affiliate",
    id:9,
    path:'/affiliate'
  },  
  {
    label:"Footer",
    id:10,
    path:'/footer'
  },
]

function DesktopNav() {
  
  return (
    <div className="flex justify-between">
      {/* Logo and company name */}
        <div className="nav md:gap-2.5">
          <p className="font-extrabold lg:text-[18px] xl:text-[20px] 2xl:text-[25px]">Logo</p>
        </div>
        {/* NavLinks */}
        <ul className="flex items-center gap-3 md:gap-7 lg:text-[18px] xl:gap-8 2xl:text-[20px] 2xl:gap-9">
          {
            navBar.map((link)=> (
              (link.id === 2) ? <li key={link.id}><Link to={link.path}> {link.label}</Link></li> :
              <li key={link.id}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "font-extrabold underline" : ""}
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

export default DesktopNav