#!/usr/bin/env python

def filter_list(list1):
  list2 = []
  for i in list1:
    if type(i) != str:
      list2.append(i)
  return list2

print(filter_list([1, 2, "a", "b"]))
print(filter_list([1, "a", "b", 0, 15]))
print(filter_list([1, 2, "aasf", "1", "123", 123]))
