import "./components.css"

export default function ErrorMessage({ message }) {
  if (!message) {
    return;
  }
  return <div className="errorMessage">{message}</div>;
}
