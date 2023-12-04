import styled, { css } from "styled-components"
import FlagWord from "./FlagWord"
import MouseSvg from './assets/mouse.svg?react'

const MouseIcon = styled(MouseSvg)<{$click: 'left' | 'right'}>`
  width: 36px;
  height: 36px;
  fill: none;
  stroke: ${props => props.theme.primary};
  stroke-width: 1px;
  margin: 16px;

  ${(props) => {
    switch (props.$click) {
      case 'left':
        return css`
          path:nth-child(2) {
            stroke-width: 0;
            fill: ${props => props.theme.primary};
          }
        `
      case 'right':
        return css`
          path:nth-child(3) {
            stroke-width: 0;
            fill: ${props => props.theme.primary};
          }
        `
    }
  }}
`
const TutorialContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  text-align: left;

  margin-bottom: 32px;
`

const CellOutline = styled.span`
  border: 1px solid ${props => props.theme.primary};
  padding: 2px 4px;
`

const Tutorial = () => {
  return (
    <TutorialContainer>
        <MouseIcon $click="left" role="img" title="Left-click" />
        <div>Reveal the <CellOutline>cell</CellOutline>.</div>
        <MouseIcon $click="right" role="img" title="Right-click" />
        <div>Set/Unset a <FlagWord />.</div>
    </TutorialContainer>
  )
}

export default Tutorial
