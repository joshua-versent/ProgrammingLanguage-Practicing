#!/usr/bin/env python

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def compare_age(self, per):
    if per.age > self.age:
      print(f'{per.name} is older than me.')
    elif per.age < self.age:
      print(f'{per.name} is younger than me.')
    else:
      print(f'{per.name} is the same age as me.')

p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)

p1.compare_age(p2)
p2.compare_age(p1)
p1.compare_age(p3)
