import express from "express";
import { Readable } from "stream";
import { convertFrames, extract } from "./image";
const app = express();

(async () => {
  // await extract();
  const frames = await convertFrames();

  app.get("/", function (req, res) {
    const stream = new Readable();
    stream._read = function noop() {};
    stream.pipe(res);

    let index = 0;

    return setInterval(() => {
      stream.push(frames[index]);
      index = (index + 1) % frames.length;
    }, 1000);
  });

  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
})();
