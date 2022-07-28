#!/usr/bin/env python

def fix_import(string):
  string = string.split(' ')
  print(f'from {string[3]} import {string[1]}')



fix_import("import object from module_name")
fix_import("import randint from random") 
fix_import("import pi from math")
