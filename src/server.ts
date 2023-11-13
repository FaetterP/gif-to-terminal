import express from "express";
import { Readable } from "stream";
import { config } from "./config";

export function buildServer(frames: string[]) {
  const app = express();

  app.get("/", function (req, res) {
    const stream = new Readable();
    stream._read = function noop() {};
    stream.pipe(res);

    let index = 0;

    return setInterval(() => {
      stream.push("\x1b[2J\x1b[H");
      stream.push(frames[index]);
      index = (index + 1) % frames.length;
    }, config.delay);
  });

  return app;
}
