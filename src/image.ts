import extractFrames from "gif-extract-frames";
import asciify from "asciify-image";
import fs from "fs";

export async function extract() {
  console.log("Start extracted frames from gif");

  const results = await extractFrames({
    input: `${__dirname}/../giphy.gif`,
    output: `${__dirname}/../frames/%d.png`,
  });

  console.log(`Extract ${results.shape[0]} frames.`);
}

export async function convertFrames(): Promise<string[]> {
  const ret: string[] = [];
  const files: string[] = fs
    .readdirSync(`${__dirname}/../frames`)
    .sort((a, b) => Number(a.slice(0, -4)) - Number(b.slice(0, -4)));

  for (const file of files) {
    console.log(`Converting '${file}'`);

    const result = await asciify(`${__dirname}/../frames/${file}`, {
      fit: "box",
      width: 30,
      height: 30,
    });

    ret.push(result as string);
  }

  return ret;
}
