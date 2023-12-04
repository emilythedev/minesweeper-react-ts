import styled from "styled-components";
import BaseTile from "./shared/ui/BaseTile";

const FlaggedGrid = styled(BaseTile)`
  &::before {
    content: 'F';
    color: ${props => props.theme.colors.black};
    font-style: italic;
    font-size: 1.25em;
  }
  background-color: ${props => props.theme.primary};
`

export default FlaggedGrid
