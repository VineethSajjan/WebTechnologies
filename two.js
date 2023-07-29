const fs = require("fs");
let text=fs.readFileSync("tesxt.txt","utf-8");
console.log(text);
text=text.replace("Rohan","Vineeth");

console.log("The content of file is");
console.log(text);
console.log("Creating a new file....");
fs.writeFileSync("rohan.txt",text);