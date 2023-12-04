import Button from "../shared/ui/Button"

interface Props {
  onSelect(levelProps: LevelProps): void
}

const levels = [
  {
    name: 'Easy',
    props: {
      rows: 8,
      cols: 10,
      totalBombs: 10,
    },
  },
  {
    name: 'Medium',
    props: {
      rows: 15,
      cols: 18,
      totalBombs: 40,
    },
  },
] as ({ name: string, props: LevelProps })[]

const SelectLevel = ({onSelect}: Props) => {
  return (
    <div>
      {levels.map(({name, props}) => {
        return (
          <Button key={name} type="button" onClick={() => onSelect(props)}>{name}</Button>
        )
      })}
    </div>
  )
}

export default SelectLevel
