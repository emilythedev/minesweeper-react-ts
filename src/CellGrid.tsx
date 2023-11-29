import { useAtom } from "jotai"
import { MouseEvent } from "react"
import styled, { css } from "styled-components"
import { cellStateAtomFamily } from "./atoms"

interface Props {
  id: number,
  content: Cell,
}

const Grid = styled.div`
  border: 1px solid #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 32px;

  &:hover, &:active {
    border-color: ${props => props.theme.primary};
  }
`

const FlaggedGrid = styled(Grid)`
  &::before {
    content: 'F';
    color: ${props => props.theme.colors.black};
    font-style: italic;
    font-size: 1.25em;
  }
  background-color: ${props => props.theme.primary};
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
        color: ${props.theme.cellColors[props.content]};
      `
    }
    return css`
      color: ${props.theme.colors.bomb};
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
