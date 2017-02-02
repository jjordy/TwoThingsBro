const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
const TwoThingsBro = require('./lib')

chai.use(chaiAsPromised)

const opts = {
  cwd: process.cwd()
}

describe('Two Things Bro Library', () => {
  describe('lib/execArgs method', () => {
    it('Should be a function', () => {
        expect(TwoThingsBro.execArgs).to.be.a.function
    })

    it('Should require an object as the first parameter', () => {
      expect(TwoThingsBro.execArgs([], 'c')).to.eventually.be.rejected
    })

    it('Should accept an array of commands for a task or a single string command', () => {
      const args = {cliParam: 'bogus1'}
      const args2 = {cliParam: ['bogus1', 'bogus2']}
      const command = 'cliParam'
      expect(TwoThingsBro.execArgs(args, command, opts)).to.eventually.be.fulfilled
      expect(TwoThingsBro.execArgs(args2, command, opts)).to.eventually.be.fulfilled
    })

    it('Should require that parameter 1 have a matching key to parameter 2', () => {
      const args = {cliParam: 'bogus1'}
      const command = 'a'
      expect(TwoThingsBro.execArgs(args, command, opts)).to.eventually.be.rejected
      expect(TwoThingsBro.execArgs(args, 'cliParam', opts)).to.eventually.be.fulfilled
    })

    it('Should return an array of child processes spawned from the input', () => {
      const args = {c: ['bogus1', 'bogus2']}
      const command = 'c'
      expect(TwoThingsBro.execArgs(args, command, opts)).to.eventually.be.a('Array')
      expect(TwoThingsBro.execArgs(args, command, opts)).to.eventually.have.length(2)
    })
  })
})

