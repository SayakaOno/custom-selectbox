import React, { useState, useEffect, useRef } from 'react';
import { SelectWrapper, Window, Select, DropDown } from './SelectStyles';
import close from '../media/close.svg';

const LightGrey = '#e0e1e2';

const SingleSelect = props => {
  const [selectedOption, setSelectedOption] = useState('');
  const [open, setOpen] = useState(false);
  const windowRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', e => {
      if (!windowClicked(e) && !dropdownClicked(e)) {
        setOpen(false);
      }
    });
  }, []);

  const handleWindowClicked = e => {
    if (!e.target.closest('.close')) {
      setOpen(!open);
    }
  };

  const handleCloseClicked = e => {
    setOpen(false);
    setSelectedOption('');
  };

  const handleClick = e => {
    let target = e.target.closest('li');
    if (!target) {
      return;
    }
    let name = target.getAttribute('name');
    setSelectedOption(name);
    setOpen(false);
  };

  const windowClicked = e => {
    let target = e.target.closest('.window');
    if (target && target === windowRef.current) {
      return true;
    }
    return false;
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
          onClick={props.options.length ? handleWindowClicked : null}
          style={{
            borderColor: props.options.length
              ? selectedOption
                ? LightGrey
                : LightGrey
              : LightGrey,
            color: props.options.length
              ? selectedOption
                ? 'blue'
                : 'inherit'
              : LightGrey,
            cursor: props.options.length ? 'pointer' : 'inherit'
          }}
        >
          {props.options.length &&
          selectedOption &&
          props.options.includes(selectedOption)
            ? props.format
              ? props.format(selectedOption)
              : selectedOption
            : props.title}
          {props.options.length && selectedOption ? (
            <span className="close" onClick={handleCloseClicked}>
              <img src={close} style={{ width: 8 }} />
            </span>
          ) : (
            <div
              open={false}
              color={props.options.length ? LightGrey : LightGrey}
            />
          )}
        </Window>
        {open && (
          <DropDown className="dropdown" onClick={handleClick}>
            <span className="close" onClick={() => setOpen(false)}>
              <img src={close} style={{ width: 8 }} />
            </span>
            <h2>{props.title}</h2>
            <ul>
              {props.options.map(option => {
                return (
                  <li name={option} key={option}>
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

export default SingleSelect;
