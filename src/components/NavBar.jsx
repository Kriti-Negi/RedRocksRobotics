import NavBarItem from '../components/NavBarItem'
import '../styles/defaults.css'

import logo from '../images/arch-logo_red-removebg-preview.png'

export default function NavBar(props){
    return(
        <div className = "navBar">
            <div>
                <img className = "nav-logo"  src = {logo}/>
            </div>
            <div className='link-container'>
                <NavBarItem
                    name = "Home"
                />
                <NavBarItem
                    name = "Team"
                />
                <NavBarItem
                    name = "Sponsors"
                />
                <NavBarItem
                    name = "Resources"
                />
                <NavBarItem
                    name = "News"
                />
                <NavBarItem
                    name = "Contact"
                />
            </div>
        </div>
    )
}