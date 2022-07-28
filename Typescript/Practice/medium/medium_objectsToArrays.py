#!/usr/bin/env python

def to_list(dictionary):
  lst = []
  for key, value in dictionary.items():
    lst.append([key, value])
  return lst

print(to_list({ "a": 1, "b": 2 }))
print(to_list({ "shrimp": 15, "tots": 12 }))
print(to_list({}))
