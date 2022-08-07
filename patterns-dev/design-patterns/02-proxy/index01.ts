const person01 = {
  name: 'Benben',
  age: 18,
  nationality: 'Taiwan'
}

const personProxy01 = new Proxy(person01, {
  get: (obj: typeof person01, prop: keyof typeof person01) => {
    console.log(`The value of ${prop} is ${obj[prop]}`)
  },
  set: (obj: typeof person01, prop: keyof typeof person01, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    if (typeof obj[prop] === 'number' || typeof obj[prop] === 'string') {
      // @ts-ignore
      obj[prop] = value
    } else {
      return false
    }
    return true
  }
})

personProxy01.name
personProxy01.age = 5
