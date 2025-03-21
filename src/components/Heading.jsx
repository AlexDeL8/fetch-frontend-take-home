import './components.css'

const Heading = ({ size, text }) => {
    switch (size) {
        case 1:
            return <h1>{text}</h1>
        case 2:
            return <h2>{text}</h2>
        case 3:
            return <h3>{text}</h3>
        default:
            return <h1>{text}</h1>
    }
}

export default Heading