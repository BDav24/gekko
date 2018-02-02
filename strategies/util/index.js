
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function round2 (num) {
  return Math.round(num * 100) / 100
}

function last (array) {
  return array ? array[array.length - 1] : null
}

function percent (x, y) {
  return x && y ? (x - y) / y * 100 : null
}

module.exports = {
  sleep,
  round2,
  last,
  percent
}
