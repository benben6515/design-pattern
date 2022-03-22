export default class FancyLogger {
  constructor() {
    this.logs = []
  }

  log(message) {
    this.logs.push(message)
    console.log(`Fancy: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

// the FancyLogger's state cant't be share. e.g. two file's logs
