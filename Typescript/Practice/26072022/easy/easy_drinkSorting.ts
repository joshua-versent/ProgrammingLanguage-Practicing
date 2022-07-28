#!/usr/bin/env npx ts-node

function sortDrinkByPrice (arr: Array<{name:string, price:number}>)
  : Array<{name:string, price:number}> {
  arr.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  return arr;
};

const drinks: Array<{name:string, price:number}> = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
];

console.log(sortDrinkByPrice(drinks));
