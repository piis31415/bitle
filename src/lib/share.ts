import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    'Bitle ' +
      solutionIndex +
      ' ' +
      (guesses[0] === guesses[1] ? 'X' : guesses.length) +
      '/2\n\n' +
      generateEmojiGrid(guesses) +
      '\nhttps://jas0n.net/bitle'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
