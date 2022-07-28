#!/usr/bin/env python

def error(num):
  errors = {
    1 : "Check the fan: e1",
    2 : "Emergency stop: e2",
    3 : "Pump Error: e3",
    4 : "c: e4",
    5 : "Temperature Sensor Error: e5"
  }

  if num not in errors:
    print("101")
  else:
    print(errors[num])

error(1)
error(2)
error(3)
