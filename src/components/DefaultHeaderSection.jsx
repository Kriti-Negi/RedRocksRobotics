import logo from '../images/HomePageLogo-removebg-preview.png';

function DefaultHeaderSection(props){
    return (
        <div className = "team-page-first">
            <img className = "team-page-image" src = {logo}></img>
            <div className = "team-page-text">
                <div className = "team-page-big-orange">{props.title}</div>
                {props.subText && <div className = "team-page-small-white">{props.subText}</div>}
                {props.subHeading && <div className='subheading-white'>{props.subHeading}</div>}
            </div>
        </div>
    )
}

export default DefaultHeaderSection;