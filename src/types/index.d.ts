type LevelProps = {rows: number, cols: number, totalBombs: number}

type Cell = number | '*'

type CellState = 'normal' | 'revealed' | 'flagged'
