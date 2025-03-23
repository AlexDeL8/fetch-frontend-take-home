import './components.css'

const Button = ({ isPrimary, isActive=false, text, id=null, onClick = null }) => {
    return (
        <button 
            className={`${isPrimary ? "primaryBtn" : "secondaryBtn"} ${isActive ? "active" : ""}`} 
            id={id} 
            onClick={onClick}>
                {text}
            </button>
    )
}

export default Button