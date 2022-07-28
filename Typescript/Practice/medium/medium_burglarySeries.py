#!/usr/bin/env python

def add_name(dict1, str1, num):
  dict1[str1] = num
  return dict1

print(add_name({}, "Brutus", 300))
print(add_name({ "piano": 500 }, "Brutus", 400))
print(add_name({ "piano": 500, "stereo": 300 }, "Caligula", 440))
