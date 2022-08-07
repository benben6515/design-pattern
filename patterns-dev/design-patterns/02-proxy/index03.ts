// Reflect, JavaScript provides a build-in object

const person03 = {
  name: 'Benben',
  age: 18,
  nationality: 'Taiwan',
}

const personProxy03 = new Proxy(person03, {
  get: (obj: typeof person02, prop: keyof typeof person02) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
  },
  set: (obj: typeof person02, prop: keyof typeof person02, value) => {
    console.log(`Change ${prop} form ${Reflect.get(obj, prop)} to ${value}`)
    Reflect.set(obj, prop, value)
    return true
  }
})

personProxy03.name
personProxy03.age = 10
