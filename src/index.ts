import express from "express";
import { Readable } from "stream";
import { extract } from "./image";
const app = express();

app.get("/", function (req, res) {
  // const stream = new Readable();
  // stream._read = function noop() {};
  // stream.pipe(res);

  // return setInterval(() => {
  //   stream.push(`${new Date()}`);
  // }, 1000);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

extract()