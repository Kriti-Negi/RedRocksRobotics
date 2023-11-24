import Button from '../components/Button';
import NavBar from '../components/NavBar';
import SlantedDivider from '../components/SlantedDivider';
import Footer from '../components/Footer';
import logo from '../images/HomePageLogo-removebg-preview.png';
import westLogo from '../images/HomePantherLogo.png';
import DefaultHeaderSection from '../components/DefaultHeaderSection';
import ImageDisplaySection from '../components/ImageDisplaySection';
import SubgroupSection from '../components/SubgroupSection';

import '../styles/OurTeamStyles.css'
import CaptainsAndMentors from '../components/CaptainsAndMentors';

function Team(){
    return (
        <div>
            <NavBar/>
            <DefaultHeaderSection
                title = "Our Team"
                subText = "As part of our mission to foster growth in students, we are primarily a student-led team. Within our team, there are four core subteams, each lead by two co-captains, outlined as follows. "
            />
            <SubgroupSection
                title = "Hardware"
                description = "Responsible for designing the robot following the engineering design process. They are the people that actually build the physical robot - mechanical and electrical parts. This includes electrical work such as wiring control components and pneumatics."
                image = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                reversed = {true}
            />
            <SubgroupSection
                title = "Software"
                description = "Using Java, the software team is responsible for all of the programming for the robot. While the hardware subteam is working on building, the software team undertakes projects such as computer vision and swerve drive optimization."
                image = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
            <SubgroupSection
                title = "Human Relations"
                description = "is in charge of grant applications, accounting, and team rosters. HR makes sure we meet deadlines and facilitates communication between subteams, ensuring that we get stuff done on time. HR also serves as historians of the team, taking photos and videos.."
                image = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                reversed = {true}
            />
            <SubgroupSection
                title = "Public Relations"
                description = "is responsible for building our team’s brand, marketing, and advertising, using a variety of platforms. PR members also reach out to sponsors and are responsible for keeping them updated about the progress of our team."
                image = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
            <CaptainsAndMentors/>
            <Footer/>
        </div>
    )
}

export default Team;