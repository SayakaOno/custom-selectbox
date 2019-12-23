import React, { useState } from 'react';
import './SingleSelect.css';

const SingleSelect = props => {
  const [selectedOption, setSelectedOption] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = e => {
    let name = e.target.getAttribute('name');
    if (e.target.tagName === 'LI') {
      setSelectedOption(name);
    }
  };

  return (
    <div
      className="select"
      tabIndex="0"
      onBlur={open ? () => setOpen(false) : null}
    >
      <div className="window" onClick={() => setOpen(!open)}>
        {`${selectedOption || props.displayName || 'display name'}`}
      </div>
      {open && (
        <div className="dropdown">
          <h2>display name</h2>
          <ul onClick={handleClick}>
            <li
              style={{
                color: selectedOption === 'option1' ? 'red' : 'inherit'
              }}
              name={'option1'}
            >
              option1
            </li>
            <li
              style={{
                color: selectedOption === 'option2' ? 'red' : 'inherit'
              }}
              name={'option2'}
            >
              option2
            </li>
            <li
              style={{
                color: selectedOption === 'option3' ? 'red' : 'inherit'
              }}
              name={'option3'}
            >
              option3
            </li>
            <li
              style={{
                color: selectedOption === 'option4' ? 'red' : 'inherit'
              }}
              name={'option4'}
            >
              option4
            </li>
            <li
              style={{
                color: selectedOption === 'option5' ? 'red' : 'inherit'
              }}
              name={'option5'}
            >
              option5
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleSelect;
