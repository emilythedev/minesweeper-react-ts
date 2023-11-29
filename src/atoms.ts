import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { difference } from 'lodash';

const rowCountAtom = atom<number>(0)
const columnCountAtom = atom<number>(0)
const cellArrayAtom = atom<Cell[]>([])
const bombIdArrayAtom = atom<number[]>([])

const flagIdArrayAtom = atom<number[]>([])
const unvisitedCellCountAtom = atom<number>(0)
const flagCountAtom = atom<number>((get) => {
  return get(bombIdArrayAtom).length - get(flagIdArrayAtom).length
})

const winAtom = atom((get) => {
  const bombs = get(bombIdArrayAtom)
  const flags = get(flagIdArrayAtom)
  if (flags.every((flag) => bombs.includes(flag))) {
    const bombsLeft = difference(bombs, flags)
    if (bombsLeft.length === get(unvisitedCellCountAtom)) {
      return true
    }
  }

  return false
})
const loseAtom = atom<boolean>(false)
const endAtom = atom((get) => (get(loseAtom) || get(winAtom)))

const boardAtom = atom([], (get, set, update: Cell[][]) => {
  console.table(update)
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
  set(unvisitedCellCountAtom, rows * cols)
})

const cellStateAtom = atomFamily((id: number) => atom<CellState>('normal'))
const cellStateAtomFamily = atomFamily((id: number) => {
  return atom(
    (get) => get(cellStateAtom(id)),
    (get, set, newState: CellState) => {
      if (get(endAtom)) return

      const state = get(cellStateAtom(id))
      if (state === 'flagged' && newState === 'normal') {
        set(cellStateAtom(id), newState)
        set(unvisitedCellCountAtom, (prev) => prev + 1)

        const flags = [...get(flagIdArrayAtom)]
        flags.splice(flags.indexOf(id), 1)
        set(flagIdArrayAtom, flags)
      }

      if (state === 'normal') {
        set(cellStateAtom(id), newState)
        set(unvisitedCellCountAtom, (prev) => prev - 1)

        if (newState === 'revealed') {
          if (get(cellArrayAtom)[id] === '*') {
            set(loseAtom, true)
          } else if (get(cellArrayAtom)[id] === 0) {
            // TODO: reveal surrounding cells
          }
        }

        if (newState === 'flagged') {
          set(flagIdArrayAtom, [...get(flagIdArrayAtom), id])
        }
      }
    }
  )
})

export {
  boardAtom, cellArrayAtom, cellStateAtomFamily, columnCountAtom, endAtom, flagCountAtom, rowCountAtom, winAtom
};
