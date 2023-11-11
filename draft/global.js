// setTimeout(() => {
//   console.log("smth");
//   clearInterval(interval);
// }, 3000);

// const interval = setInterval(() => {
//   console.log("interval");
// }, 1000);

// console.log(__dirname);
// console.log(__filename);
// const os = require("os");
// console.log(os.platform(), os.homedir(), os.hostname());
const fs = require("fs");
//? reading file, fs methods are async
// fs.readFile("file.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });
// console.log("last line");
//? writing files
// fs.writeFile("file.txt", "wtf", (err) => {
//   if (err) console.log("err", err);
//   console.log("file was written");
// });
//?directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("mkdir");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("removed");
//   });
// }

//? deleting files
if (fs.existsSync("./deleteme.js")) {
  fs.unlink("./deleteme.js", (err) => {
    if (err) console.log(err);
    console.log("deleted");
  });
} else
  fs.writeFile("deleteme.js", "", (err) => {
    if (err) console.log(err);
    console.log("file written");
  });
