import { atom } from 'jotai'

export const rowCountAtom = atom<number>(0)
export const columnCountAtom = atom<number>(0)
export const cellArrayAtom = atom<Cell[]>([])
export const bombIdArrayAtom = atom<number[]>([])

export const normalCellCountAtom = atom<number>(0)

export const boardAtom = atom([], (_, set, update: Cell[][]) => {
  // console.table(update)
  const rows = update.length
  const cols = update[0]?.length || 0
  set(rowCountAtom, rows)
  set(columnCountAtom, cols)

  const bombIds = [] as number[]
  const emptyCellCoords = [] as [number, number][]
  update.forEach((row, ri)=> {
    row.forEach((cell, ci) => {
      if (cell === '*') {
        bombIds.push(ri * cols + ci)
      } else if (cell === 0) {
        emptyCellCoords.push([ri, ci])
      }
    })
  })
  set(bombIdArrayAtom, bombIds)
  set(cellArrayAtom, update.flat())
  set(normalCellCountAtom, rows * cols)
})
