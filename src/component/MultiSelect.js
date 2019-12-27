import React, { useState, useEffect, useRef } from 'react';
import { SelectWrapper, Window, Select, DropDown } from './SelectStyles';

const MultiSelectBox = props => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const windowRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', e => {
      if (!windowClicked(e) && !dropdownClicked(e)) {
        setOpen(false);
      }
    });
  }, 0);

  const handleWindowClicked = e => {
    if (!e.target.closest('.close')) {
      setOpen(!open);
    }
  };

  const handleCloseClicked = e => {
    setOpen(false);
    setSelectedOptions([]);
  };

  const windowClicked = e => {
    let target = e.target.closest('.window');
    if (target && target === windowRef.current) {
      return true;
    }
    return false;
  };

  const handleClick = e => {
    let target = e.target.closest('li');
    if (!target) {
      return;
    }
    let name = target.getAttribute('name');
    if (selectedOptions.includes(name)) {
      setSelectedOptions(
        selectedOptions.slice().filter(option => name !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, name]);
    }
    setInput('');
  };

  const dropdownClicked = e => {
    if (e.target.closest('.dropdown')) {
      return true;
    }
    return false;
  };

  return (
    <SelectWrapper>
      <Select className="select">
        <Window
          ref={windowRef}
          className="window"
          onClick={handleWindowClicked}
          style={{
            borderColor: selectedOptions.length ? 'blue' : 'blue',
            color: selectedOptions.length ? 'blue' : 'inherit',
            cursor: props.options.length ? 'pointer' : 'inherit'
          }}
        >
          {`${selectedOptions[0] || props.displayName || props.title}${
            selectedOptions.length > 1
              ? ' +' + (selectedOptions.length - 1).toString()
              : ''
          }`}
          <span className="icon">
            {selectedOptions.length ? (
              <span className="close" onClick={handleCloseClicked}>
                x
              </span>
            ) : (
              '^'
            )}
          </span>
        </Window>
        {open && (
          <DropDown className="dropdown" onClick={handleClick}>
            <span className="close" onClick={() => setOpen(false)}>
              x
            </span>
            <h2>{props.title}</h2>
            <div className="input">
              <input
                type="text"
                onChange={e => setInput(e.target.value)}
                value={input}
                style={{ position: 'relative' }}
              />
            </div>
            <ul>
              {props.options
                .filter(option =>
                  option.toLowerCase().includes(input.toLowerCase())
                )
                .map(option => {
                  return (
                    <li name={option} key={option} style={{ display: 'flex' }}>
                      <input type="checkbox" />
                      {option}
                    </li>
                  );
                })}
            </ul>
          </DropDown>
        )}
      </Select>
    </SelectWrapper>
  );
};

export default MultiSelectBox;
