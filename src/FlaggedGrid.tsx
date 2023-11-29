import styled from "styled-components";
import Grid from "./Grid";

const FlaggedGrid = styled(Grid)`
  &::before {
    content: 'F';
    color: ${props => props.theme.colors.black};
    font-style: italic;
    font-size: 1.25em;
  }
  background-color: ${props => props.theme.primary};
`

export default FlaggedGrid
