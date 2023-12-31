import '../styles/defaults.css'

export default function Button(props){
  return (
    <a href={props.url} target = '_blank'>
      <button className="base-btn" style={{ backgroundColor: props.color }}>
        {props.name}
      </button>
    </a>
  )
}
