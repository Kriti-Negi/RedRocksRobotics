function SubgroupSection(props){
    if(props.reversed){
        return (
            <div className="subgroup-section">
                <div className="left" style = {{textAlign: 'right'}}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="right"> <img src = {props.image} alt = "awesome image"/> </div>
            </div>
        )
    }else{
        return (
            <div className="subgroup-section reversed">
                <div className="right"> 
                    <img src = {props.image} alt = "awesome image"/> 
                </div>
                <div className="left" style = {{textAlign: 'left'}}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                
            </div>
        )
    }
    
}

export default SubgroupSection;