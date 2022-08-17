#!/usr/bin/env npx ts-node

// const res = Array.from(Array(5).keys()).map(x => x + 1);
// console.log(res);

const range = (start: number, end: number) => 
  Array.from(
           Array(end - start).keys()
       ).map(x => x + start);

function timesTable () {
  const size: number = 12;
  let table: number[][] = [];
  table.push(range(0, size+1))
  for (let i of range(1, size+1)) {
    let row: number[] = [];
    row.push(i);
    row.push(...range(1, size+1).map(x => x*i))
    table.push(temp);
  };
  console.log(table);
  
};
timesTable();



