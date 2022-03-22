class FancyLogger {
  constructor() {
    if (FancyLogger.instance === null) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log(`Fancy: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

// now the FancyLogger's state can be share. e.g. two file's logs
const logger = new FancyLogger()
// let logger can't be change anything
Object.freeze()

export default logger
