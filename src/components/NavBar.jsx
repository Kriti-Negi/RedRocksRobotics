import NavBarItem from '../components/NavBarItem'
import '../styles/defaults.css'

import logo from '../images/arch-logo_red-removebg-preview.png'

export default function NavBar(props){
    return(
        <div className = "navBar">
            <a href = "/"><img className = "nav-logo"  src = {logo}/></a>
            
            <div className='link-container'>
                
                <NavBarItem
                    name = "Home" address = "/"
                />
                <NavBarItem
                    name = "Team" address = "/team"
                />
                <NavBarItem
                    name = "Sponsors" address = "/sponsors"
                />
                {/* <NavBarItem
                    name = "Resources" address = ""
                /> */}
                <NavBarItem
                    name = "Photos" address = "/media"
                />
                <NavBarItem
                    name = "Contact" address = "/contactus"
                />
            </div>
        </div>
    )
}