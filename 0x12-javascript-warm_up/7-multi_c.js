#!/usr/bin/node
if (isNaN(process.argv[2])) {
  console.log("Missing number of occurrences");
} else {
  let x = parseInt(process.argv[2]);
  let str = "";
  for (let i = 0; i < x; i++) {
    str += "C is fun\n";
  }
  console.log(str.trim());
}
