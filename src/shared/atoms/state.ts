import { atom } from 'jotai';
import { atomEffect } from 'jotai-effect';
import { atomFamily } from 'jotai/utils';
import { difference } from 'lodash';
import { bombIdArrayAtom, unvisitedCellCountAtom } from './board';

export const cellStateAtom = atomFamily((id: number) => atom<CellState>('normal')) // eslint-disable-line @typescript-eslint/no-unused-vars

export const flagIdArrayAtom = atom<number[]>([])
export const flagCountAtom = atom<number>((get) => {
  return get(bombIdArrayAtom).length - get(flagIdArrayAtom).length
})

export const winAtom = atom((get) => {
  const bombs = get(bombIdArrayAtom)
  const flags = get(flagIdArrayAtom)
  if (flags.every((flag) => bombs.includes(flag))) {
    const bombsLeft = difference(bombs, flags)
    if (!bombsLeft.length || bombsLeft.length === get(unvisitedCellCountAtom)) {
      return true
    }
  }

  return false
})
export const loseAtom = atom<boolean>(false)
export const endAtom = atom((get) => (get(loseAtom) || get(winAtom)))

export const onWinEffectAtom = atomEffect((get, set) => {
  // reveal all bombs on win
  if (get(winAtom)) {
    get(bombIdArrayAtom).forEach((id) => {
      set(cellStateAtom(id), (state) => state === 'normal' ? 'revealed' : state)
    })
  }
})
