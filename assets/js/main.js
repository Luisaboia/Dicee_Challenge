const player1 = prompt("What's your name, Player 1?")
const player2 = prompt("What's your name, Player 2?")
document.querySelector('.player1').textContent = player1
document.querySelector('.player2').textContent = player2
if (player1 === '') {
  document.querySelector('.player1').textContent = 'Player 1'
}
if (player2 === '') {
  document.querySelector('.player2').textContent = 'Player 2'
}
function roll() {
  let randomN = Math.floor(Math.random() * 6 + 1)
  console.log(randomN)
  if (randomN === 6) {
    document.querySelector('.img1').src = './assets/img/dice6.png'
  } else if (randomN === 5) {
    document.querySelector('.img1').src = './assets/img/dice5.png'
  } else if (randomN === 4) {
    document.querySelector('.img1').src = './assets/img/dice4.png'
  } else if (randomN === 3) {
    document.querySelector('.img1').src = './assets/img/dice3.png'
  } else if (randomN === 2) {
    document.querySelector('.img1').src = './assets/img/dice2.png'
  } else if (randomN === 1) {
    document.querySelector('.img1').src = './assets/img/dice1.png'
  }

  let randomN2 = Math.floor(Math.random() * 6 + 1)
  console.log(randomN2)
  if (randomN2 === 6) {
    document.querySelector('.img2').src = './assets/img/dice6.png'
  } else if (randomN2 === 5) {
    document.querySelector('.img2').src = './assets/img/dice5.png'
  } else if (randomN2 === 4) {
    document.querySelector('.img2').src = './assets/img/dice4.png'
  } else if (randomN2 === 3) {
    document.querySelector('.img2').src = './assets/img/dice3.png'
  } else if (randomN2 === 2) {
    document.querySelector('.img2').src = './assets/img/dice2.png'
  } else if (randomN2 === 1) {
    document.querySelector('.img2').src = './assets/img/dice1.png'
  }

  if (randomN > randomN2) {
    document.querySelector('.winner').textContent = `${
      document.querySelector('.player1').textContent
    } Wins!`
  } else if (randomN === randomN2) {
    document.querySelector('.winner').textContent = 'Tie!'
  } else {
    document.querySelector('.winner').textContent = `${
      document.querySelector('.player2').textContent
    } Wins!`
  }
}
