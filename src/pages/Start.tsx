import SelectLevel from "../features/SelectLevel";
import Tutorial from "../features/Tutorial";

interface Props {
  onSelect(levelProps: LevelProps): void,
}

function StartPage({onSelect}: Props) {
  return (
    <div>
      <Tutorial />
      <SelectLevel onSelect={onSelect} />
    </div>
  )
}

export default StartPage
