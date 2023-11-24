import DefaultHeaderSection from '../components/DefaultHeaderSection';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import Footer from '../components/Footer';

import '../styles/SponsorStyles.css';
import {SponsorCard} from '../components/SponsorCard';

import googleFiber from '../images/google fiber.png';
import RioTinto from '../images/RioTinto logo.png';
import Northrop from '../images/Northrop_Grumman_logo_blue-on-clear_2020.png'
import Marathon from '../images/MarathonLogo.png';
import TSlots from '../images/tslotsLogo.png';
import DodLogo from '../images/DoDLogo.png';

function Sponsors(){
    return (
        <div>
            <NavBar/>
            <DefaultHeaderSection
                title = "Sponsors"
                subHeading = "Thank you to our amazing Sponsors, who make this possible!"
            />
            <div className='we-want-you'>
                <div className='left'>
                    <h3>We Want You!</h3>
                    <div className='btn-container'>
                        <Button
                            url = "/"
                            name = "Sponsor Us!"
                        />
                        <Button
                            url = "/"
                            name = "Sponsorship Package"
                        />
                    </div>
                    
                </div>
                <div className='right'>
                    <img src = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt = "image"/>
                </div>
            </div>
            <div className='sponsor-showcase'>
                <div className='header'>
                    <h3>Sponsors</h3>
                </div>
                <div className='cards'>
                    <SponsorCard
                        logo = {googleFiber}
                        name = "Google Fiber"
                    />
                    <SponsorCard
                        logo = {RioTinto}
                        name = "Rio Tinto"
                    />
                    <SponsorCard
                        logo = {Northrop}
                        name = "Northrop Grumman"
                    />
                    <SponsorCard
                        logo = {Marathon}
                        name = "Marathon"
                    />
                    <SponsorCard
                        logo = {TSlots}
                        name = "T Slots"
                    />
                    <SponsorCard
                        logo = {DodLogo}
                        name = "DOD STEM"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Sponsors;