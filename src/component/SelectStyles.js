import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  width: 170px;
  z-index: 9999;
`;
export const Select = styled.div`
  position: absolute;
  background: #fff;
`;
export const Window = styled.div`
  border-radius: 5px;
  border: solid 1px blue;
  padding: 5px;
  margin-bottom: 2px;
  width: fit-content;
  & span {
    margin-left: 5px;
    padding: 0 5px;
  }
`;
export const DropDown = styled.div`
  min-width: 150px;
  border: solid 1px blue;
  padding-top: 10px;
  width: fit-content;
  position: relative;
  & h2 {
    margin-bottom: 5px;
    padding: 0 10px;
  }
  & ul {
    list-style: none;
    padding-left: 0;
    cursor: pointer;
  }
  & li {
    padding: 3px 13px;
    &:hover {
      background: blue;
    }
    &:last-child {
      padding-bottom: 8px;
    }
  }
  & span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    cursor: pointer;
  }
  & .input {
    position: relative;
    padding-bottom: 10px;
    & input {
      outline: none;
      padding: 2px;
      margin: 0 10px;
    }
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: blue;
  stroke-width: 2px;
`;
