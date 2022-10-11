class Dog02 {
  constructor(public name: string) {
    this.name = name;
  }
}

const animalFunctionality = {
  walk: () => console.log('walking!'),
  sleep: () => console.log('sleeping!'),
};

const dogFunctionality02 = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('playing!'),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(dogFunctionality02, animalFunctionality);
Object.assign(Dog02.prototype, dogFunctionality02);

const pet2 = new Dog02('benben')

// @ts-ignore
pet2.walk()
// @ts-ignore
pet2.sleep()
