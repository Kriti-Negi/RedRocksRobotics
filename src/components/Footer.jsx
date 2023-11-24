import '../styles/defaults.css'
import logo from '../images/arch-logo_red-removebg-preview.png'
import instagram from '../images/instagram.svg';
import email from '../images/envelope-regular.svg';
import github from '../images/github.svg';
export default function Footer(){
    return(
        <div className = "footer">
            <hr className = "orange-line"/>
            <img className = "footer-logo"  src = {logo}/>
            <div className = "footer-follow">Follow Us!</div>
            <div className = "footer-icons">
                <div className = "social-icons">
                    <a href = "https://instagram.com/redrockrobotics">
                        <img src = {instagram} width={50}></img>
                    </a>
                </div>
                <div className = "social-icons">
                    <a href = "whsred3006@gmail.com">
                        <img src = {email} width={50}></img>
                    </a>
                </div>
                <div className = "social-icons">
                <a href = "https://github.com/Red-Rock-Robotics-3006">
                    <img src = {github} width={50}></img></a>
                </div>
                
            </div>
            <div className = "copyright-message">©Red Rock Robotics 2023</div>
        </div>
    );
}