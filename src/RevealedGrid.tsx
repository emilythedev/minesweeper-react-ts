import styled, { css } from "styled-components";
import Grid from "./Grid";

const RevealedGrid = styled(Grid) <{ $content: Cell; }> `
  border-color: transparent;
  &:hover, &:active {
    border-color: transparent;
  }

  &::before {
    content: '${(props) => props.$content}'
  }

  ${(props) => {
    if (typeof props.$content === 'number') {
      return css`
        color: ${props.theme.cellColors[props.$content]};
      `;
    }
    return css`
      color: ${props.theme.colors.bomb};
      font-size: 64px;
    `;
  }}
`;

export default RevealedGrid
