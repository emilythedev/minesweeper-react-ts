import { Getter, Setter, atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { cellArrayAtom, columnCountAtom, rowCountAtom, unvisitedCellCountAtom } from './board'
import { cellStateAtom, endAtom, flagIdArrayAtom, loseAtom } from './state'

export const cellStateAtomFamily = atomFamily((id: number) => {
  return atom(
    (get) => get(cellStateAtom(id)),
    (get, set, newState: CellState) => {
      if (get(endAtom)) return

      const state = get(cellStateAtom(id))
      if (state === 'flagged' && newState === 'normal') {
        set(cellStateAtom(id), newState)
        set(unvisitedCellCountAtom, (prev) => prev + 1)

        set(flagIdArrayAtom, (flags) => {
          const newFlags = [...flags]
          newFlags.splice(flags.indexOf(id), 1)
          return newFlags
        })
      }

      if (state === 'normal') {
        set(cellStateAtom(id), newState)
        set(unvisitedCellCountAtom, (prev) => prev - 1)

        if (newState === 'revealed') {
          if (get(cellArrayAtom)[id] === '*') {
            set(loseAtom, true)
          } else if (get(cellArrayAtom)[id] === 0) {
            clearSurroundingCells(get, set, id)
          }
        }

        if (newState === 'flagged') {
          set(flagIdArrayAtom, (flags) => [...flags, id])
        }
      }
    }
  )
})

function clearSurroundingCells(get: Getter, set: Setter, cellId: number) {
  const visitedIds: number[] = []
  const cols = get(columnCountAtom)
  const totalCells = get(rowCountAtom) * cols
  const cellArray = get(cellArrayAtom)

  const generateSurroundingIds = (id: number) => {
    const surroundings = [
      id - cols,
      id + cols,
    ]
    if ((id % cols) > 0) {
      surroundings.push(id - 1, id - cols - 1, id + cols - 1)
    }
    if ((id % cols) < (cols - 1)) {
      surroundings.push(id + 1, id - cols + 1, id + cols + 1)
    }
    return surroundings.filter(id => {
      if (!(id >= 0 && id < totalCells && visitedIds.indexOf(id) === -1)) {
        return false
      }
      if (get(cellStateAtom(id)) === 'revealed' || cellArray[id] === '*') {
        return false
      }
      return true
    })
  }

  // transverse the surrounding cells
  const nextIds = [cellId]
  while (nextIds.length > 0) {
    const centerId = nextIds.shift() as number
    visitedIds.push(centerId)
    const surroundings = generateSurroundingIds(centerId)

    for (let i = 0; i < surroundings.length; i++) {
      const id = surroundings[i]
      const state = get(cellStateAtom(id))
      const content = cellArray[id]

      set(cellStateAtom(id), 'revealed')

      // update statistics
      if (state === 'flagged') {
        set(flagIdArrayAtom, (flags) => {
          const newFlags = [...flags]
          newFlags.splice(flags.indexOf(id), 1)
          return newFlags
        })
      } else {
        set(unvisitedCellCountAtom, (prev) => prev - 1)
      }

      // transverse when cell content is 0
      if (content === 0 && nextIds.indexOf(id) === -1) {
        nextIds.push(id)
      }
    }
  }
}
