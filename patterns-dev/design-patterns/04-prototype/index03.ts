const dog = {
  bark() {
    console.log(`Woof!`);
  },
};

const pet1 = Object.create(dog);
const pet2 = Object.create(dog);
pet1.bark();
pet2.bark();

console.log(pet1);
console.log('Direct properties on pet1: ', Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));
