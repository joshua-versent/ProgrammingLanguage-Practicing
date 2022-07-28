#!/usr/bin/env npx ts-node

function error (num: number) {
  
  let errors: { [key: number]: string } = {
    1 : "Check the fan: e1",
    2 : "Emergency stop: e2",
    3 : "Pump Error: e3",
    4 : "c: e4",
    5 : "Temperature Sensor Error: e5"
  };
  if (!(num in errors)) {
    console.log("101");
    
  } else {
    console.log(errors[num]);
    
  };
};

error(1);
error(2);
error(3);
