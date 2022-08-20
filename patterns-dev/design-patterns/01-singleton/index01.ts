class Counter01 {
  private counter: 0

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

// test case
const counter1 = new Counter01()
const counter2 = new Counter01()

console.log(counter1.getInstance() === counter2.getInstance())
console.log(counter1.getCount())
console.log(counter1.increment())
console.log(counter1.getCount())
console.log(counter2.getCount())