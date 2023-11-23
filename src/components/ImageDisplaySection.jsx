import "../styles/ImageBox.css"

function ImageDisplaySection(props){
    return (
        <div className="image-display">
            <h3>{props.heading}</h3>
            <div className="img-grid">
                <div className="left">
                    <img src = {props.image1} alt = "large img"/>
                </div>
                <div className="right">
                    <img className = "top-img" src = {props.image2} alt = "top left img"/>
                    <img className = "top-img" src = {props.image3} alt = "top right img"/>
                    <img src = {props.image4} alt = "bottom left img"/>
                    <img src = {props.image5} alt = "bottom left img"/>
                </div>
            </div>
        </div>
    )
}

export default ImageDisplaySection;