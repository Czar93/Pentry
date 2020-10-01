import styled from "styled-components";

const Select = styled.select`
  width: 60px;
  height: 35px;
  background: white;
  color: ${({theme}) => theme.color.darkgray};
  padding-left: 13px;
  font-size: 14px;
  border: none;
  box-shadow: 0 8px 8px rgba(0,0,0,0.3);
  border-radius: 30px;

  &:focus {
      outline: none;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;

    &:hover {
        background: ${({theme}) => theme.color.darkgray};
    }
  }
`;

export default Select;