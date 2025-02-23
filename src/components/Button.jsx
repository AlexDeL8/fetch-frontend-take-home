const Button = ({ isPrimary, text, onClick = null }) => {
    return onClick === null ? (
        <button className={isPrimary ? "primaryBtn" : "secondaryBtn"}>{text}</button>
    ) : (
        <button className={isPrimary ? "primaryBtn" : "secondaryBtn"} onClick={onClick}>{text}</button>
    )
}

export default Button