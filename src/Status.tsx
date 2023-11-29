import { useAtom, useAtomValue } from "jotai"
import styled from "styled-components"
import Button from "./Button"
import FlagWord from "./FlagWord"
import { endAtom, flagCountAtom, winAtom } from "./atoms"

interface Props {
  onRestart(): void
}

const StatusContainer = styled.div`
  padding: 16px 32px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  .count {
    color: #02c988;
    font-weight: bold;
    font-size: 1.25em;
    margin: 0 8px;
  }

  > .grow-1 {
    flex-grow: 1;
  }
`

const Status = ({onRestart}: Props) => {
  const [flagCount] = useAtom(flagCountAtom)
  const ended = useAtomValue(endAtom)
  const win = useAtomValue(winAtom)

  return (
    <StatusContainer>
      {!ended ? (
        <div className="grow-1">
          Unused <FlagWord plural />: <span className="count">{flagCount}</span>
        </div>
      ) : (
        <span className="grow-1">{win ? 'win' : 'lose'}!</span>
      )}
      <Button type="button" onClick={onRestart}>Restart</Button>
    </StatusContainer>
  )
}

export default Status
