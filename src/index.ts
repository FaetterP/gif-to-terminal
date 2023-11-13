import { convertFrames, extractFrames } from "./image";
import fs from "fs";
import { buildServer } from "./server";
import { config } from "./config";

const port = config.port;

(async () => {
  fs.rmSync(config.outputDir, { force: true, recursive: true });
  fs.mkdirSync(config.outputDir);

  await extractFrames();
  const frames = await convertFrames();

  const app = buildServer(frames);
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
})();
