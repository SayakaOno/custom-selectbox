import React, { useState } from 'react';
import './Select.css';

const Select = props => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleClick = e => {
    let name = e.target.getAttribute('name');
    if (e.target.tagName === 'LI') {
      if (selectedOptions.includes(name)) {
        setSelectedOptions(
          selectedOptions.slice().filter(option => name !== option)
        );
      } else {
        setSelectedOptions([...selectedOptions, name]);
      }
    }
  };

  return (
    <div>
      <div className="window">
        {`${selectedOptions[0] || props.displayName || 'display name'}${
          selectedOptions.length > 1
            ? ' +' + (selectedOptions.length - 1).toString()
            : ''
        }`}
      </div>
      <div className="dropdown">
        <h2>display name</h2>
        <ul onClick={handleClick}>
          <li
            style={{
              color: selectedOptions.includes('option1') ? 'red' : 'inherit'
            }}
            name={'option1'}
          >
            option1
          </li>
          <li
            style={{
              color: selectedOptions.includes('option2') ? 'red' : 'inherit'
            }}
            name={'option2'}
          >
            option2
          </li>
          <li
            style={{
              color: selectedOptions.includes('option3') ? 'red' : 'inherit'
            }}
            name={'option3'}
          >
            option3
          </li>
          <li
            style={{
              color: selectedOptions.includes('option4') ? 'red' : 'inherit'
            }}
            name={'option4'}
          >
            option4
          </li>
          <li
            style={{
              color: selectedOptions.includes('option5') ? 'red' : 'inherit'
            }}
            name={'option5'}
          >
            option5
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
