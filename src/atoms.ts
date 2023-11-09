import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

type CellState = 'normal' | 'revealed' | 'flagged'
const rowCountAtom = atom<number>(0)
const columnCountAtom = atom<number>(0)
const totalBombCountAtom = atom<number>(0)
const boardAtom = atom<Array<Array<number | '*'>>>([])
const cellStateAtomFamily = atomFamily((id) => atom<CellState>('normal'))

const totalCellCountAtom = atom(get => get(rowCountAtom) * get(columnCountAtom))
const unrevealedBombCountAtom = atom(get => {
  let totalBombCount = get(totalBombCountAtom)
  const totalCellCount = get(totalCellCountAtom)
  for (let i = 0; i < totalCellCount; i++) {
    if (get(cellStateAtomFamily(i)) === 'flagged') {
      totalBombCount--
    }
  }
  return totalBombCount
})

export {
  boardAtom, cellStateAtomFamily, columnCountAtom, rowCountAtom,
  totalBombCountAtom, unrevealedBombCountAtom
};
