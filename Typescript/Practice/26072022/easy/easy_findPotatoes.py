#!/usr/bin/env python

def potatoes(string):
  counter = 0
  for i in range(len(string) - 5):
    if string[i:i+6] == 'potato':
      counter += 1
  return counter

print(potatoes("potato"))
print(potatoes("potatopotato"))
print(potatoes("potatoapple"))
