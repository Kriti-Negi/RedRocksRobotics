import Button from '../components/Button';
import NavBar from '../components/NavBar'
import logo from '../images/HomePageLogo-removebg-preview.png'
function Home(){
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            {/* <Button
                name = "hello world"
            /> */}
            <div className = "panel-1">
                <div>
                    <img className = "img-logo-home"  src = {logo}/>
                </div>
            </div>
        </div>


    )
}

export default Home;