#!/usr/bin/env python

def detect_word(letters):
  word = ''
  for i in range(len(letters)):
    if letters[i].islower():
      word += letters[i]
  return word

print(detect_word("UcUNFYGaFYFYGtNUH"))
print(detect_word("bEEFGBuFBRrHgUHlNFYaYr"))
print(detect_word("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))
