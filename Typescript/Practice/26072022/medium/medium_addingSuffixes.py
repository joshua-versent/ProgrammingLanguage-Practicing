#!/usr/bin/env python

def add_suffix(suffix):
  def func(string):
    return string + suffix
  return func

add_ly = add_suffix("ly")

print(add_ly("hopeless"))
print(add_ly("total"))

add_less = add_suffix("less")

print(add_less("fear"))
print(add_less("ruth"))
