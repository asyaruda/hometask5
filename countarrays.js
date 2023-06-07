const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let sum = 0
let positiveCount = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sum += numbers[i]
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++
  }
}

let maxNumber = numbers[0]
let maxIndex = 0

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i]
    maxIndex = i
  }
}

let negativeCount = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negativeCount++
  }
}

let oddPositive = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
    oddPositive++
  }
}

let evenPositive = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    evenPositive++
  }
}

let sumEvenPositive = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    sumEvenPositive += numbers[i]
  }
}

let sumOddPositive = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
    sumOddPositive += numbers[i]
  }
}

let mulPositive = 1

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    mulPositive *= numbers[i]
  }
}

const resultMessage = 
  'сума позитивних елементів: ' + sum + '\n' +
  'кількість позитивних елементів: ' + positiveCount + '\n' +
  'максимальний елемент масиву: ' + maxNumber + '\n' +
  'порядковий номер максимального елементу: ' + maxIndex + '\n' +
  'кількість негативних елементів: ' + negativeCount + '\n' +
  'кількість непарних позитивних елементів: ' + oddPositive + '\n' +
  'кількість парних позитивних елементів: ' + evenPositive + '\n' +
  'сума парних позитивних елементів: ' + sumEvenPositive + '\n' +
  'сума непарних позитивних елементів: ' + sumOddPositive + '\n' +
  'добуток позитивних елементів: ' + mulPositive;

alert(resultMessage)