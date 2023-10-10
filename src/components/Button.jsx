export default function Button(props){
    return (
        <button style = {{backgroundColor: props.color}}>
            {props.name}
        </button>
    )
}