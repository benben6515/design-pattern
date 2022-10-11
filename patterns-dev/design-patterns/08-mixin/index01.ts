class Dog {
  constructor(public name: string) {
    this.name = name;
  }
}

const dogFunctionality = {
  hi() {
    console.log(this.name)
  },
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
// @ts-ignore
pet1.hi();
