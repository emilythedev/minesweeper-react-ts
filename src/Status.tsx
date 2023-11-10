import { useAtom, useAtomValue } from "jotai"
import { endAtom, flagCountAtom, winAtom } from "./atoms"

interface Props {
  onRestart(): void
}

const Status = ({onRestart}: Props) => {
  const [flagCount] = useAtom(flagCountAtom)
  const ended = useAtomValue(endAtom)
  const win = useAtomValue(winAtom)
  if (ended) {
    return (
      <div>
        <span>{win ? 'win' : 'lose'}!</span>
        <button type="button" onClick={onRestart}>Restart</button>
      </div>
    )
  }
  return (
    <div>Unused Flags: {flagCount}</div>
  )
}

export default Status
