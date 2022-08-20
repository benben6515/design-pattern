class Dog {
  name
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging tail!'),
  play: () => console.log('Playing!'),
};

// use Object.assign for mixin
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog('benben');
// @ts-ignore
pet1.bark();
// @ts-ignore
pet1.play();
