#!/usr/bin/node
const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  const edge = "X";
  const inside = " ";
  let printLine;
  for (let i = 1; i <= size; i++) {
    if (i === 1 || i === size) {
      printLine = Array(size + 1).join(edge);
    } else {
      printLine = edge + Array(size - 1).join(inside) + edge;
    }
    console.log(printLine);
  }
}
