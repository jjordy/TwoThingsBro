const isDev = process.env.NODE_ENV === 'development'
const spawn = require('child_process').spawn
const cwd = process.cwd()

module.exports = {
  execArgs: (args, id, opts = {cwd: cwd, shell: true, stdio: 'inherit'}) => {
    return new Promise((resolve, reject) => {

      const accts = []
      let command

      if (args.c || args.command) {
        command = args.c || args.command
      } else {
        command = 'npm run'
      }

      if (typeof args !== 'object') {
        return reject('Please pass an object or string as the first parameter')
      } else if (typeof args === 'object' && !args[id]) {
        console.log(args, id)
        return reject('Please make sure you have args matching the id')
      }

      if (typeof args[id] === 'string') {
        const acctProcess = spawn(`${command} ${args[id]}`, [], opts)
        accts.push(acctProcess)
      } else {
        try {
          args[id].map(arg => {
            const acctProcess = spawn(`${command} ${arg}`, [], opts)
            accts.push(acctProcess)
          })
        } catch (err) {
          return reject (err)
        }
      }
      resolve(accts)
    })
  }
}