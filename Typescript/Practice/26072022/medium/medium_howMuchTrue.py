#!/usr/bin/env python

def count_true(list1):
  counter = 0
  for i in list1:
    if i == True:
      counter += 1
  return counter

print(count_true([True, False, False, True, False]))
print(count_true([False, False, False, False]))
print(count_true([]))
