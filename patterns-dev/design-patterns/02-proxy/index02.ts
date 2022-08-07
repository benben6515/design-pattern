const person02 = {
  name: 'Benben',
  age: 18,
  nationality: 'Taiwan',
};

const personProxy02 = new Proxy(person02, {
  get: (obj: typeof person02, prop: keyof typeof person02) => {
    if (!obj[prop]) {
      console.warn(`Hmm... this property doesn't seem to exist in this object`);
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj: typeof person02, prop: keyof typeof person02, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.warn(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === 'name' && value.length < 2) {
      console.warn(`You need to provider a valid name.`);
    } else {
      console.log(`Change ${prop} form ${obj[prop]} to ${value}`);
    }
    return true
  },
});

personProxy02.name;
personProxy02.name = 'b';
personProxy02.age;
// for test
// @ts-ignore
personProxy02.age = 'b';
// for test
// @ts-ignore
personProxy02.b;