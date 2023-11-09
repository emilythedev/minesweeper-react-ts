import { useAtom } from "jotai"
import { unrevealedBombCountAtom } from "./atoms"

const Status = () => {
  const [bombCount] = useAtom(unrevealedBombCountAtom)
  return (
    <div>Bombs: {bombCount}</div>
  )
}

export default Status
