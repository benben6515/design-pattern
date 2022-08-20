class Dog01 {
  name: ''
  constructor(name) {
    this.name = name;
  }

  bark() {
    return 'Woof!';
  }
}

const dog1_1 = new Dog01('Ben');
const dog1_2 = new Dog01('Benben');

console.log(Dog01.prototype);
// @ts-ignore
// use `__proto__` with ts
console.log(dog1_1.__proto__);

// @ts-ignore
Dog01.prototype.play = () => console.log('Playing now');
// @ts-ignore
dog1.play();
