#!/usr/bin/env python

def char_count(str1, str2):
  counter = 0
  for c in str2:
    if c == str1:
      counter += 1
  return counter

print(char_count("a", "edabit"))
print(char_count("c", "Chamber of secrets"))
print(char_count("b", "big fat bubble"))
