import React from 'react'

const Input = ({labelText, type, name, placeholderText = '', required = false, disabled = false}) => {
  return (
    <div className="inputContainer">
        <label htmlFor={name}>{labelText}</label>
        <input type={type} placeholder={placeholderText} required={required} disabled={disabled}></input>
    </div>
  )
}

export default Input