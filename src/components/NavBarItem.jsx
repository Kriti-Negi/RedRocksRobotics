import '../styles/defaults.css'
import { Link } from "react-router-dom"

export default function NavBarItem(props){
    return(
        <div>
            <Link className = "navBarItem" to={props.address}>{props.name}</Link>
        </div>
    )
}