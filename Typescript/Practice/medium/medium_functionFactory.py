#!/usr/bin/env python

def make_plus_function(num):
  def func(num2):
    return num + num2
  return func

plus_five = make_plus_function(5)

print(plus_five(2))
print(plus_five(-8))

plus_ten = make_plus_function(10)

print(plus_ten(0))
print(plus_ten(188))
print(plus_five(plus_ten(0)))
