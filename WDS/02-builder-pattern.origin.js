// setup
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

// could be better
const user = new User('Bob', undefined, undefined, new Address('111', 'rock road'))

console.log(user)
