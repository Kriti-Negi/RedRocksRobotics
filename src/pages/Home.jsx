import Button from '../components/Button';
import NavBar from '../components/NavBar';
import SlantedDivider from '../components/SlantedDivider';
import Footer from '../components/Footer';
import logo from '../images/HomePageLogo-removebg-preview.png';
import westLogo from '../images/HomePantherLogo.png';
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
                <div>{ <Button name = "What is FRC?"/> }</div>
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
                        <Button name = "West High School"/>
                    </div>
                </div>

            </div>


            <div className = "our-team-panel">
                <div>Our Team</div>
            </div>

            <Footer/>
        </div>


    )
}

export default Home;