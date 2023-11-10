import { useAtom, useAtomValue } from "jotai"
import { endAtom, flagCountAtom, winAtom } from "./atoms"

const Status = () => {
  const [flagCount] = useAtom(flagCountAtom)
  const ended = useAtomValue(endAtom)
  const win = useAtomValue(winAtom)
  if (ended) {
    return <div>{win ? 'win' : 'lose'}!</div>
  }
  return (
    <div>Unused Flags: {flagCount}</div>
  )
}

export default Status
