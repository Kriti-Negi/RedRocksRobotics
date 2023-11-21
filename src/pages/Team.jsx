import Button from '../components/Button';
import NavBar from '../components/NavBar';
import SlantedDivider from '../components/SlantedDivider';
import Footer from '../components/Footer';
import logo from '../images/HomePageLogo-removebg-preview.png';
import westLogo from '../images/HomePantherLogo.png';
function Team(){
    return (
        <div>
            <NavBar/>
            
            <div className = "team-page-first">
                <img className = "team-page-image" src = {logo}></img>
                <div className = "team-page-text">
                    <div className = "team-page-big-orange">Our Team</div>
                    <div className = "team-page-small-white">As part of our mission to foster growth in students, we are primarily a student-led team. Within our team, there are four core subteams, each lead by two co-captains, outlined as follows. </div>
                </div>

            </div>
        </div>
    )
}

export default Team;