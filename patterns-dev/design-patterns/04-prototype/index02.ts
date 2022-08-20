class Dog {
  constructor(name) {
    this.name = name;
  }
  name = ''
  bark() {
    console.log('Woof!');
  }
}
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    console.log('Flying');
  }
}

const dog1 = new SuperDog('Benben');
dog1.bark();
dog1.fly();
