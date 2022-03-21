// setup
class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
  hasAccess = () => this.name === 'superuser'
}

// setup "null" object !!!

class NullUser {
  constructor() {
    this.id = '-1'
    this.name = 'Guest'
  }
  hasAccess = () => false
}

const users = [
  new User(1, 'normalUser'),
  new User(2, 'superuser'),
]

// functions

const getUser = (id) => users.find(e => e.id === id) || new NullUser()

const printUser = (id) => {
  const user = getUser(id)

  // better
  console.log(`Hello, ${user.name}`)

  // better
  if (user.hasAccess()) {
    console.log('You have Access!')
  } else {
    console.log('You are not allow here!')
  }
}

// test case
printUser(1)
printUser(2)
printUser(3)
