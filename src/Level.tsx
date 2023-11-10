interface Props {
  selectLevel(levelProps: LevelProps): void
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

const Level = ({selectLevel}: Props) => {
  return (
    <div>
      {levels.map(({name, props}) => {
        return (
          <button key={name} type="button" onClick={() => selectLevel(props)}>{name}</button>
        )
      })}
    </div>
  )
}

export default Level
