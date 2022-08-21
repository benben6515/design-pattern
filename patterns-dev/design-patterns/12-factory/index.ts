// user.ts
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
})

const user1 = createUser({
  firstName: 'Benben',
  lastName: 'Weng',
  email: 'benben@weng.com'
})

const user2 = createUser({
  firstName: 'Some',
  lastName: 'One',
  email: 'some@one.com'
})

console.log(user1)
console.log(user2)
