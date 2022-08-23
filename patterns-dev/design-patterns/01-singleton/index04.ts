class Counter02 {
  private counter = 0
  private static instance03: any

  constructor() {}

  static getInstance() {
    if (!Counter02.instance03) {
      Counter02.instance03 = new Counter02()
      return Counter02.instance03
    }
    return Counter02.instance03
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

const counter01 = Counter02.getInstance()
const counter02 = Counter02.getInstance()
console.log(counter01)
console.log(counter02)
console.log(counter01 === counter02)
counter01.increment()
console.log(counter01.getCount())
console.log(counter02.getCount())
