import styled from "styled-components"

const Button = styled.button`
  border-radius: 0;
  border: 1px solid ${props => props.theme.primary};
  padding: 0.6em 1.2em;
  font-size: 18px;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  color: ${props => props.theme.primary};
  background: transparent;
  margin: 4px 8px;

  &:hover, &:active {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.colors.black};
  }
`

export default Button
