import { Outlet } from 'react-router-dom'
import DesktopNav from '../navBar/desktopNav'

function LayOut() {
  return (
    <div className="flex flex-col">
        <DesktopNav/>
        <div className="flex-grow">
            <Outlet/>
        </div>
        <p>This is the footer</p>

    </div>
  )
}

export default LayOut