import extract from "gif-extract-frames";
import asciify from "asciify-image";
import fs from "fs";
import { config } from "./config";

export async function extractFrames() {
  console.log("Start extracting frames from gif");

  const results = await extract({
    input: config.gifPath,
    output: `${config.outputDir}/%d.png`,
  });

  console.log(`Extracted ${results.shape[0]} frames.`);
}

export async function convertFrames(): Promise<string[]> {
  const ret: string[] = [];
  const files: string[] = fs
    .readdirSync(config.outputDir)
    .sort((a, b) => Number(a.slice(0, -4)) - Number(b.slice(0, -4)));

  for (const file of files) {
    console.log(`Converting '${file}'`);

    const { color, size } = config;
    const result = await asciify(`${config.outputDir}/${file}`, {
      fit: "box",
      color,
      height: size,
      width: size,
    });
    ret.push(result as string);
  }

  return ret;
}
