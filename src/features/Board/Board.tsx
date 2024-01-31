import { cellArrayAtom, columnCountAtom, loseAtom, winAtom } from "@/shared/atoms"
import FlagTile from "@/shared/ui/FlagTile"
import { useAtomValue } from "jotai"
import styled, { css, keyframes } from "styled-components"
import BoardCell from "./BoardCell"

interface WrapperProps {
  $lose: boolean,
  $win: boolean,
}

const grayscale = keyframes`
  0% { filter: grayscale(0); }
  100% { filter: grayscale(1) invert(.1); }
`
const rotate = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.5) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
`

const Wrapper = styled.div<WrapperProps>`
  width: max-content;
  height: max-content;

  ${props => {
    if (props.$lose) {
      return css`
        animation: 1s cubic-bezier(0, 0, 0.27, 1) forwards ${grayscale};
      `
    }

    if (props.$win) {
      return css`
        ${FlagTile}::before {
          content: '*';
          transform-origin: center center;
          animation: 1s linear infinite ${rotate};
        }
      `
    }
  }}
`

interface Props {
  $columns: number,
}

const BoardContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 50px);
  grid-auto-rows: 50px;
  grid-gap: 2px;
`

const Board = () => {
  const cols = useAtomValue(columnCountAtom)
  const cells = useAtomValue(cellArrayAtom)
  const lose = useAtomValue(loseAtom)
  const win = useAtomValue(winAtom)

  return (
    <Wrapper $lose={lose} $win={win}>
      <BoardContainer $columns={cols}>
        {cells.map((cell, id) => {
          return (<BoardCell key={id} id={id} content={cell}></BoardCell>)
        })}
      </BoardContainer>
    </Wrapper>
  )
}

export default Board
