// setup
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

// better
class User {
  constructor(name) {
    this.name = name
  }
}

// better
class UserBuilder {
  constructor(name) {
    this.user = new User(name)
    this.age = age
    this.phone = phone
    this.address = address
  }

  setAge(age) {
    this.user.age = age
    return this
  }

  setPhone(phone) {
    this.user.phone = phone
    return this
  }

  setAddress(address) {
    this.user.address = address
  }

  build() {
    return this
  }
}

// better
// const user = new UserBuilder('Bob').build()
const user = new UserBuilder('Bob').setAge(18).setPhone('091234568').build()

console.log(user)

// --------------------------------------------------

// more better (only in JavaScript)
class User2 {
  constructor(name, { age = 18, phone = '123', address } = {}) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

const user2 = new User2('Ben', { age: 10, address: new Address('100', 'rock road') })
console.log(user2)
// user.name -> 10
// user.phone -> 123
