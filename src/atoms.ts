import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export type Cell = number | '*'
type CellState = 'normal' | 'revealed' | 'flagged'
const endAtom = atom<boolean>(false)
const rowCountAtom = atom<number>(0)
const columnCountAtom = atom<number>(0)
const flagCountAtom = atom<number>(0)
const cellArrayAtom = atom<Cell[]>([])
const bombIdArrayAtom = atom<number[]>([])
const flagIdArrayAtom = atom<number[]>([])
const unrevealedCellCountAtom = atom<number>(0)
const winAtom = atom((get) => {
  const bombs = get(bombIdArrayAtom)
  const flags = get(flagIdArrayAtom)
  if (bombs.length === flags.length && flags.every((flag) => bombs.indexOf(flag) > -1)) {
    return true
  }

  if (get(unrevealedCellCountAtom) === 0 && flags.every((flag) => bombs.indexOf(flag) > -1)) {
    return true
  }
  return false
})
const boardAtom = atom([], (get, set, update: Cell[][]) => {
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
  set(flagCountAtom, bombIds.length)
  set(bombIdArrayAtom, bombIds)
  set(cellArrayAtom, update.flat())
  set(unrevealedCellCountAtom, rows * cols - bombIds.length)
})
const cellStateAtom = atomFamily((id: number) => atom<CellState>('normal'))
const cellStateAtomFamily = atomFamily((id: number) => {
  return atom(
    (get) => get(cellStateAtom(id)),
    (get, set, newState: CellState) => {
      if (get(winAtom) || get(endAtom)) return

      const state = get(cellStateAtom(id))
      if (state === 'flagged' && newState === 'normal') {
        set(cellStateAtom(id), newState)
        set(flagCountAtom, (prev) => prev + 1)
        const flags = [...get(flagIdArrayAtom)]
        flags.splice(flags.indexOf(id), 1)
        set(flagIdArrayAtom, flags)
        set(unrevealedCellCountAtom, (prev) => prev + 1)
      } else if (state === 'normal') {
        set(cellStateAtom(id), newState)
        if (newState === 'revealed') {
          set(unrevealedCellCountAtom, (prev) => prev - 1)
          if (get(cellArrayAtom)[id] === '*') {
            set(endAtom, true)
          } else if (get(cellArrayAtom)[id] === 0) {
            // TODO: reveal surrounding cells
          }
        } else if (newState === 'flagged') {
          set(flagCountAtom, prev => prev - 1)
          set(flagIdArrayAtom, [...get(flagIdArrayAtom), id])
        }
      }
    }
  )
})


export {
  boardAtom, cellArrayAtom, cellStateAtomFamily, endAtom, flagCountAtom,
  winAtom
};
