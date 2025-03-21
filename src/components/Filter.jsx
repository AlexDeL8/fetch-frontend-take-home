import React from 'react'

const Filter = ({ label, selectName, options, currentValue, setStateValue }) => {
  return (
    <div className='filter'>
        <label htmlFor={selectName}>{label}</label>
        {options.type === 'alphabetical' ? 
        <select 
          name={selectName} 
          className='filterDropdown' 
          value={currentValue}
          onChange={e => setStateValue(e.target.value)}>
            <option value='asc'>A to Z</option>
            <option value='desc'>Z to A</option>
        </select> :
        null}
    </div>
    
  )
}

export default Filter