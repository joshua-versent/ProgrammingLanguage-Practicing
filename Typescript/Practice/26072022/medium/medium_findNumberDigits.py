#!/usr/bin/env python

def num_of_digits(num):
  digits = 0
  if num == 0:
    digits = 1
  else:
    while True:
      if num // (10 ** digits) != 0:
        digits += 1
        continue
      break
  return digits

print(num_of_digits(1000))
print(num_of_digits(12))
print(num_of_digits(1305981031))
print(num_of_digits(0))

