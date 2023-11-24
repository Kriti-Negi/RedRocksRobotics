export const SponsorCard = (props) => {
    return (
        <div className="card">
            <img src = {props.logo} alt = "sponsor image"/>
            <h4 className="sponsor-name">{props.name}</h4>
        </div>
    )
}
