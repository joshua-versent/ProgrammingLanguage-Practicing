#!/usr/bin/env python

def possible_bonus(pos1, pos2):
  if (pos1 < pos2) and (pos2 - pos1 <= 6):
    return True
  return False

print(possible_bonus(3, 7))
print(possible_bonus(1, 9))
print(possible_bonus(5, 3))
