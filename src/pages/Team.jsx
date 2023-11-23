import Button from '../components/Button';
import NavBar from '../components/NavBar';
import SlantedDivider from '../components/SlantedDivider';
import Footer from '../components/Footer';
import logo from '../images/HomePageLogo-removebg-preview.png';
import westLogo from '../images/HomePantherLogo.png';
import DefaultHeaderSection from '../components/DefaultHeaderSection';
import ImageDisplaySection from '../components/ImageDisplaySection';
function Team(){
    return (
        <div>
            <NavBar/>
            
            <DefaultHeaderSection
                title = "Our Team"
                subText = "As part of our mission to foster growth in students, we are primarily a student-led team. Within our team, there are four core subteams, each lead by two co-captains, outlined as follows. "
            />

            
        </div>
    )
}

export default Team;