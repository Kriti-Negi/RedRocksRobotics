import "../styles/ImageBox.css"

function ImageDisplaySection(props){
    return (
        <div className="image-display">
            <h3>{props.heading}</h3>
            <div className="img-grid">
                <div className={props.reversed? "left": "right"}>
                    {props.reversed && <img src = {props.image1} alt = "large img"/>}
                    { !props.reversed && <img className = "top-img" src = {props.image2} alt = "top left img"/>}
                    { !props.reversed && <img className = "top-img" src = {props.image3} alt = "top right img"/>}
                    { !props.reversed && <img src = {props.image4} alt = "bottom left img"/>}
                    { !props.reversed && <img src = {props.image5} alt = "bottom left img"/>}  
                    
                </div>
                <div className={props.reversed? "right": "left"}>
                    {!props.reversed && <img src = {props.image1} alt = "large img"/>}
                    { props.reversed && <img className = "top-img" src = {props.image2} alt = "top left img"/>}
                    { props.reversed && <img className = "top-img" src = {props.image3} alt = "top right img"/>}
                    { props.reversed && <img src = {props.image4} alt = "bottom left img"/>}
                    { props.reversed && <img src = {props.image5} alt = "bottom left img"/>}  
                
                </div>
            </div>
        </div>
    )
}

export default ImageDisplaySection;