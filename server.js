// const http = require("http");
// const fs = require("fs");
// const _ = require("lodash");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   //lodash
//   const num = _.random(0, 20);
//   console.log(num);

//   const greet = _.once(() => {
//     console.log("Hello");
//   });
//   greet();
//   greet();
//   //set header content-type
//   res.setHeader("Content-Type", "text/html");

//   let path = "./views/";

//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/about-us":
//       res.statusCode = 301;
//       res.setHeader("Location", "/about");
//       res.end();
//       break;

//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
//   console.log(res.statusCode);
// });

// server.listen(PORT, "localhost", () => {
//   console.log(`Listening for requests on port ${PORT}`);
// });
