// setup
class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
  hasAccess() {
    return this.name === 'superuser'
  }
}

const users = [
  new User(1, 'normalUser'),
  new User(2, 'superuser'),
]

// functions

const getUser = (id) => users.find(e => e.id === id)

const printUser = (id) => {
  const user = getUser(id)

  let name = 'Guest'
  // could be better
  if (user != null && user.name != null) name = user.name
  console.log(`Hello, ${name}`)

  // could be better
  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log('You have Access!')
  } else {
    console.log('You are not allow here!')
  }
}

// test case
printUser(1)
printUser(2)
printUser(3)
