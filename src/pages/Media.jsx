import NavBar from '../components/NavBar';
import DefaultHeaderSection from '../components/DefaultHeaderSection';
import ImageDisplaySection from '../components/ImageDisplaySection';
import Footer from '../components/Footer';
import RobotImageSection from '../components/RobotImageSection';

function Media(){
    return(
        <main>
            <NavBar/>      
            <DefaultHeaderSection
                title = "Some Cool Photos"
                subHeading = "(and other Stuff)"
            />
            <ImageDisplaySection
                heading = "Team pictures!"
                image1 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image2 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image3 = "https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg"
                image4 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image5 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                reversed = {true}
            />

            <ImageDisplaySection
                heading = "Section that Hanxiao wanted"
                image1 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image2 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image3 = "https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg"
                image4 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image5 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />

            <ImageDisplaySection
                heading = "Current Robot"
                image1 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image2 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image3 = "https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg"
                image4 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image5 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                reversed = {true}
            />

            <RobotImageSection
                labelRobotOne = "Robot 1"
                labelRobotTwo = "Robot 2"
            />

            <ImageDisplaySection
                heading = "Memes"
                image1 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image2 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image3 = "https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg"
                image4 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image5 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                reversed = {true}
            />

            <ImageDisplaySection
                heading = "Bloopers"
                image1 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image2 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image3 = "https://cdn.britannica.com/51/94351-050-86B70FE1/Leaning-Tower-of-Pisa-Italy.jpg"
                image4 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                image5 = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                reversed = {false}
            />
            <Footer/>
        </main>
    )
}

export default Media;