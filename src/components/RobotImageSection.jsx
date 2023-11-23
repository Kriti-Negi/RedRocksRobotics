function RobotImageSection(props){
    
    const style = {
        backgroundImage: `url('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg')`,
        height: '400px',
        width: '95%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="robot-img-showcase">
            <h3 className="section-heading">Hall of Fame</h3>
            <div className = "robot-image-section">
                <div className="robot-cards left">
                    <div className="img-container" style = {style}>
                        <h3 className="label">
                            {props.labelRobotOne}
                        </h3>
                    </div>
                </div>
                <div className="robot-cards right">
                    <div className="img-container" style = {style}>
                        <h3 className="label">
                            {props.labelRobotTwo}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RobotImageSection;