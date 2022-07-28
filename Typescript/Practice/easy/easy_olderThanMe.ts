#!/usr/bin/env npx ts-node

class Person {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  };

  compareAge (per: Person) {
    if (this.age < per.age) {
      console.log(`${per.name} is older than me.`);
    } else if (this.age > per.age) {
      console.log(`${per.name} is younger than me.`);
    } else {
      console.log(`${per.name} is the same age as me.`);
    };
  };
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

