import '../styles/defaults.css'

export default function Button(props){
    return (
        <button className = "base-btn" style = {{backgroundColor: props.color}}>
            {props.name}
        </button>
    )
}