#!/usr/bin/env npx ts-node

// const res = Array.from(Array(5).keys()).map(x => x + 1);
// console.log(res);

const range = (start: number, end: number) => 
  Array.from(Array(end - start).keys()).map(x => x + start);

function timesTable () {
  let table: number[][] = [];
  for (let i in Array.from(range(0, 13))) {
    let temp: number[] = [];
    if (Number(i) === 0) {
      temp = Array.from(range(0, 13));
      table.push(temp);
    } else {
      temp.push(Number(i));
      for (let j of Array.from(range(1, 13))) {
        temp.push(j * Number(i))
      }
      table.push(temp);
    };
    
  };
  console.log(table);
  
};

timesTable();



