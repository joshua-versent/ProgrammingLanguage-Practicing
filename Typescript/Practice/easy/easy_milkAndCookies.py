#!/usr/bin/env python

import datetime

def time_for_milk_and_cookies(the_date):
  if the_date.month == 12 and the_date.day == 24:
    return True
  else:
    return False

print(time_for_milk_and_cookies(datetime.date(2013, 12, 24)))
print(time_for_milk_and_cookies(datetime.date(2013, 1, 23)))
print(time_for_milk_and_cookies(datetime.date(3000, 12, 24)))
