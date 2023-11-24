import Button from '../components/Button';
import NavBar from '../components/NavBar';
import SlantedDivider from '../components/SlantedDivider';
import Footer from '../components/Footer';
import logo from '../images/HomePageLogo-removebg-preview.png';
import westLogo from '../images/HomePantherLogo.png';

import '../styles/ContactUs.css'

function ContactUs(){
    return (
        <div>
            <NavBar/>
            <div className = "contact-us-title">
                Contact Us!
            </div>
            {/* Try to find a way to do this with rectangles, not buttons. */}
            {/* <div id = "rectangle" className = "rect-panel-contact">
                <div className = "email-rect">
                    Email: whsred3006@gmail.com
                </div>
                <div id = 'rectangle' className = "instagram-rect">
                    Instagram: redrock3006
                </div>
                
            </div> */}
            <div className = "button-panel-contact">
                <div className = "email-button">
                    <Button name = "Email: whsread3006@gmail.com"/>
                </div>
                <div className = "instagram-button">
                    <Button name = "Instagram: redrock-3006"/>
                </div>
                <div className = "github-button">
                    <Button name = "Github: Red-Rock-Robotics-3006" url = "https://github.com/Red-Rock-Robotics-3006"/>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default ContactUs;