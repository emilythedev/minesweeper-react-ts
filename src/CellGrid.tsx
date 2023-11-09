interface Props {
  id: number,
  content: number | '*'
}

const cellGridStyles = {
}

const CellGrid = ({id, content}: Props) => {
  return (
    <div style={cellGridStyles}>{content}</div>
  )
}

export default CellGrid
