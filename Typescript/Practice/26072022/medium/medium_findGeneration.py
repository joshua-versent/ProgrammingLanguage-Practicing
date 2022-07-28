#!/usr/bin/env python

def generation(num, string):
  genMale = {
    -3: 'great grandfather',
    -2: 'grandfather',
    -1: 'father',
    0: 'me!',
    1: 'son',
    2: 'grandson',
    3: 'great grandson'
  }

  genFemale = {
    -3: 'great grandmother',
    -2: 'grandmother',
    -1: 'mother',
    0: 'me!',
    1: 'daughter',
    2: 'granddaughter',
    3: 'great granddaughter'
  }

  if string == 'f':
    return genFemale[num]
  else:
    return genMale[num]

print(generation(2, "f"))
print(generation(-3, "m"))
print(generation(1, "f"))
