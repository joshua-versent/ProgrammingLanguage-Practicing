#!/usr/bin/env python

def sort_drinks_by_price(drinks):
  drinks.sort(key = lambda x: x['price'])
  return drinks

drinks = [
  {"name": "lemonade", "price": 50},
  {"name": "lime", "price": 10}
]

print(sort_drinks_by_price(drinks))
