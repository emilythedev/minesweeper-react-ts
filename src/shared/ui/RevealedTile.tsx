import styled from 'styled-components';
import BaseTile from './BaseTile';

const RevealedTile = styled(BaseTile) <{ $content: number; }> `
  border-color: transparent;
  &:hover, &:active {
    border-color: transparent;
  }

  &::before {
    content: '${(props) => props.$content}';
  }

  color: ${props => props.theme.cellColors[props.$content]};
`;

export default RevealedTile
