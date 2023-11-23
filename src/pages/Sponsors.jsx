import DefaultHeaderSection from '../components/DefaultHeaderSection';
import NavBar from '../components/NavBar';
function Sponsors(){
    return (
        <div>
            <NavBar/>
            <DefaultHeaderSection
                title = "Sponsors"
                subHeading = "Thank you to our amazing Sponsors, who make this possible!"
            />
        </div>
    )
}

export default Sponsors;