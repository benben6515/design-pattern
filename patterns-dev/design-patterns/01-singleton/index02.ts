let instance02: null | Counter02 = null

class Counter02 {
  private counter = 0
  constructor() {
    if (instance02) {
      throw new Error('You can only create one instance')
    }
    instance02 = this
  }

  getInstance() {
    return this
  }

  getCount() {
    return this.counter
  }

  increment() {
    return ++this.counter
  }

  decrement() {
    return --this.counter
  }
}

const counter01 = new Counter02()
const counter02 = new Counter02()
