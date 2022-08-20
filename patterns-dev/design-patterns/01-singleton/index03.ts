let instance03: null | Counter03 = null

class Counter03 {
  private counter = 0
  constructor() {
    if (instance03) {
      throw new Error('You cat only create one instance')
    }
    instance03 = this
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

const singletonCounter = Object.freeze(new Counter03())
export default singletonCounter
