import { useAtom } from "jotai"
import { MouseEvent } from "react"
import styled, { css } from "styled-components"
import { cellStateAtomFamily } from "./atoms"

interface Props {
  id: number,
  content: Cell,
}

const dangerColors = [
  '#303030',
  '#6b6b6b',
  '#64afc6',
  '#55ad5e',
  '#dcdc43',
  '#e6843e',
  '#cc523a',
  '#a12419',
  '#7d1041',
]

const Grid = styled.div`
  border: 1px solid #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 32px;

  &:hover, &:active {
    border-color: #02c988;
  }
`

const FlaggedGrid = styled(Grid)`
  &::before {
    content: 'F';
    color: black;
    font-style: italic;
    font-size: 1.25em;
  }
  background-color: #02c988;
`

const RevealedGrid = styled(Grid)<{content: Cell}>`
  border-color: transparent;
  &:hover, &:active {
    border-color: transparent;
  }

  &::before {
    content: '${(props) => props.content}'
  }

  ${(props) => {
    if (typeof props.content === 'number') {
      return css`
        color: ${dangerColors[props.content]};
      `
    }
    return css`
      color: #c20000;
      font-size: 64px;
    `
  }}
`

const CellGrid = ({id, content}: Props) => {
  const [state, setState] = useAtom(cellStateAtomFamily(id))
  function handleClick() {
    setState('revealed')
  }
  function handleFlag(e: MouseEvent<HTMLElement>) {
    setState(state === 'flagged' ? 'normal' : 'flagged')
    e.preventDefault()
  }
  if (state === 'revealed') {
    return (
      <RevealedGrid content={content} />
    )
  }

  let Component = Grid
  if (state === 'flagged') {
    Component = FlaggedGrid
  }
  return (
    <Component onClick={handleClick} onContextMenu={handleFlag} />
  )
}

export default CellGrid
