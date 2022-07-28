#!/usr/bin/env python


def can_nest(list1, list2):
  if min(list1) > min(list2) and max(list1) < max(list2):
    return True
  else:
    return False

print(can_nest([1, 2, 3, 4], [0, 6]))
print(can_nest([3, 1], [4, 0]))
print(can_nest([9, 9, 8], [8, 9]))
print(can_nest([1, 2, 3, 4], [2, 3]))
