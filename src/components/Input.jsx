import './components.css'
import React from 'react'

const Input = ({
    labelText, 
    type, 
    name, 
    placeholderText = '', 
    required = false, 
    disabled = false,
    action,
}) => {
  return (
    <div className="inputContainer">
        <label htmlFor={name}>{labelText}</label>
        <input 
            type={type} 
            placeholder={placeholderText} 
            required={required} 
            disabled={disabled} 
            onChange={(event) => action(event.target.value)}>
        </input>
    </div>
  )
}

export default Input