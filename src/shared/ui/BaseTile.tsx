import styled, { css } from 'styled-components'

const BaseTile = styled.div<{$hoverable?: boolean}>`
  border: 1px solid #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 32px;

  ${props => {
    if (props.$hoverable) {
      return css`
        &:hover, &:active {
          border-color: ${props => props.theme.primary};
        }
      `
    }
  }}
`

export default BaseTile
