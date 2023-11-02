import '../styles/defaults.css'
import logo from '../images/arch-logo_red-removebg-preview.png'

export default function Footer(){
    return(
        <div className = "footer">
            <hr className = "orange-line"/>
            <img className = "footer-logo"  src = {logo}/>
            <div>Socials</div>
        </div>
    );
}