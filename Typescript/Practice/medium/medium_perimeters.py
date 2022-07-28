#!/usr/bin/env python

def perimeter(l, num):
  result = (l == 's') * (4 * num) + (l == 'c') * (6.28 * num)
  return result

print(perimeter("s", 7))
print(perimeter("c", 4))
print(perimeter("c", 9))
