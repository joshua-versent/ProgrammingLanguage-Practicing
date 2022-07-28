#!/usr/bin/env python

def concat(*args):
  result = []
  for lst in args:
    result.extend(lst)
  return result

print(concat([1, 2, 3], [4, 5], [6, 7]))
print(concat([1], [2], [3], [4], [5], [6], [7]))
print(concat([1, 2], [3, 4]))
print(concat([4, 4, 4, 4, 4]))
