let counter = 1

const looper = setInterval(() => {
  const debug = require('debug')(`app:${counter}`)
  counter++
  if (counter === 30) {
    clearInterval(looper)
  }
  debug('Hello')
},1000)