import '../styles/defaults.css'


export default function NavBarItem(props){
    return(
        <div className = "navBarItem">
            {props.name}
        </div>
    )
}