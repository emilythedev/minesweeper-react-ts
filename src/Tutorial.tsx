import styled, { css } from "styled-components"
import MouseSvg from './assets/mouse.svg?react'

const MouseIcon = styled(MouseSvg)<{click: 'left' | 'right'}>`
  width: 36px;
  height: 36px;
  fill: none;
  stroke: #02c988;
  stroke-width: 1px;
  margin: 8px;

  ${(props) => {
    switch (props.click) {
      case 'left':
        return css`
          path:nth-child(2) {
            stroke-width: 0;
            fill: #02c988;
          }
        `
      case 'right':
        return css`
          path:nth-child(3) {
            stroke-width: 0;
            fill: #02c988;
          }
        `
    }
  }}
`
const TutorialContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;

  margin: 16px;
`

const Tutorial = () => {
  return (
    <TutorialContainer>
        <MouseIcon click="left" />
        <div>Reveal the cell.</div>
        <MouseIcon click="right" />
        <div>Set/Unset a flag.</div>
    </TutorialContainer>
  )
}

export default Tutorial
