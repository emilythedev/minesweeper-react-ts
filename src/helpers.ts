function getRandomNumbers(range: number, count: number) {
  const numbers: number[] = []
  for (let i = 0; i < range; i++) {
    numbers.push(i)
  }

  const result: number[] = []
  let i = numbers.length

  while (i > 0 && result.length < count) {
    const j = Math.floor(Math.random() * i)
    i--

    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp

    result.push(numbers[i])
  }

  return result
}

export function generateBoard(rows: number, cols: number, bombCount: number) {
  const cellCount = rows * cols
  const bombIndexes = getRandomNumbers(cellCount, bombCount)
  const board: Cell[][] = (new Array(rows).fill(0)).map(() => (new Array(cols)).fill(0))

  bombIndexes.forEach((bombi) => {
    const row = Math.floor(bombi / cols)
    const col = bombi % cols

    board[row][col] = '*'
    if (typeof board[row][col - 1] === 'number') (board[row][col - 1] as number) += 1
    if (typeof board[row][col + 1] === 'number') (board[row][col + 1] as number) += 1
    if (board[row - 1] && typeof board[row - 1][col] === 'number') (board[row - 1][col] as number) += 1
    if (board[row - 1] && typeof board[row - 1][col - 1] === 'number') (board[row - 1][col - 1] as number) += 1
    if (board[row - 1] && typeof board[row - 1][col + 1] === 'number') (board[row - 1][col + 1] as number) += 1
    if (board[row + 1] && typeof board[row + 1][col - 1] === 'number') (board[row + 1][col - 1] as number) += 1
    if (board[row + 1] && typeof board[row + 1][col] === 'number') (board[row + 1][col] as number) += 1
    if (board[row + 1] && typeof board[row + 1][col + 1] === 'number') (board[row + 1][col + 1] as number) += 1
  })

  return board
}
