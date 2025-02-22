const Button = ({ isPrimary, text, onClick }) => {
    return <button className={isPrimary ? "primaryBtn" : "secondaryBtn"} onClick={() => onClick}>{text}</button>
}

export default Button