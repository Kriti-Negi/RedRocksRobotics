import Button from '../components/Button';
import NavBar from '../components/NavBar';
import SlantedDivider from '../components/SlantedDivider';
import Footer from '../components/Footer';
import logo from '../images/HomePageLogo-removebg-preview.png';
import westLogo from '../images/HomePantherLogo.png';
import teamIcon from '../images/PeopleIcon.png';
import moneyIcon from '../images/MoneyIcon.png';
import clockIcon from '../images/ClockIcon.png';
function Home(){
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            {/* <Button
                name = "hello world"
            /> */}



            <div className = "header-panel">

                <div>
                    <img className = "img-logo-home"  src = {logo}/>
                </div>

                <div className = "header-text">
                    <div className = "big-orange">
                        RED ROCK ROBOTICS
                    </div>
                    <div className = "small-white">
                        West High School FRC Team
                    </div>
                </div>
            </div>
            <SlantedDivider/>
        {/* Our Mission Panel */}
            <div className = "our-mission-panel">
                <div className = "our-mission">Our Mission</div>
                <div className = "frc-info">We foster skills in engineering, leadership, and teamwork 
                    in all members through the process of creating competitive 
                    and innovative robots to compete in the FIRST Robotics 
                    Competition (FRC). Our program strives to balance 
                    competitiveness with graciousness, recognizing that competition 
                    is mutually beneficial to all who participate. We also focus 
                    on innovation, respect to both ourselves and our competitors,
                    and giving back to our community - all at zero cost for our 
                    team members.</div>
                <div>{ <Button name = "What is FRC?" url = "https://www.firstinspires.org/robotics/frc"/> }</div>
            </div>
            <SlantedDivider/>
            {/* Our School Panel */}
            <div class = "our-school-panel">
                <div>
                    <img className = "west-logo-home"  src = {westLogo}/>
                </div>

                <div class = "our-school-right">
                    <div class = "our-school">
                        Our School
                    </div>
                    <div class = "west-description">
                        All Salt Lake City School District schools are committed to the 
                        district’s vision of Excellence and Equity: every student, every 
                        classroom, every day. In keeping with this vision, our schools 
                        offer academically rigorous classes based on the Utah Core curriculum, 
                        hold high expectations for all students, respond to individual 
                        student needs, and provide a safe and healthy environment for 
                        student learning.Some schools may also offer individual learning 
                        options for students.  West high offers Advanced Placement and 
                        International Baccalaureate classes which the majority of the 
                        robotics team members take during their time at West. 
                    </div>
                    <div class = "west-button">
                        <Button name = "West High School" url = "https://west.slcschools.org/"/>
                    </div>
                </div>

                

                
                
            </div>
            <SlantedDivider/>
            <div class = "our-team-panel">
                {/* Weird box thing in middle */}
                <div className = "our-team">Our Team</div>

                <div class = "lower-team-panel">
                    <div class = "team-panel">
                        <img className = "people-icon" src = {teamIcon}/>
                        <div className = "team-text"> <span className = "bold-orange">50+</span> <span className = "unbold-white">TEAM MEMBERS</span></div>
                    </div>
                    <div class = "money-panel">
                        <img className = "money-icon" src = {moneyIcon}/>
                        <div className = "team-text"> <span className = "bold-orange">$0</span> <span className = "unbold-white">Cost required to join, participate, and travel</span></div>
                    </div>
                    <div class = "clock-panel">
                        <img className = "clock-icon" src = {clockIcon}/>
                        <div className = "team-text"> <span className = "bold-orange">15</span> <span className = "unbold-white">years active</span></div>
                    </div>
                </div>
                <div className = "learn-more-button">
                    <Button name = "Learn More" url = "/team"/>
                </div>
                
            </div>

            <Footer/>
        </div>


    )
}

export default Home;