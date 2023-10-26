import NavBarItem from '../components/NavBarItem'
import '../styles/defaults.css'

import logo2 from '../images/arch-logo_red-removebg-preview.png'

export default function NavBar(props){
    return(
        <div className = "navBar">
            <div>
                <img className = "nav-logo"  src = {logo2}/>
            </div>
            <div className='link-container'>
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