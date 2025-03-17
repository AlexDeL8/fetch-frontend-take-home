import './components.css'

const Button = ({ isPrimary, text, id=null, onClick = null }) => {
    return <button className={isPrimary ? "primaryBtn" : "secondaryBtn"} id={id} onClick={onClick}>{text}</button>
}

export default Button