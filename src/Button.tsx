import styled from "styled-components";

const Button = styled.button`
  border-radius: 0;
  border: 1px solid #03c988;
  padding: 0.6em 1.2em;
  font-size: 18px;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  color: #03c988;
  background: transparent;
  margin: 4px 8px;

  &:hover, &:active {
    background: #03c988;
    color: black;
  }
`

export default Button
