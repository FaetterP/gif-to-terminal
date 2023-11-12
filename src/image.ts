import extractFrames from "gif-extract-frames";
import asciify from "asciify-image";
import fs from "fs";

export async function extract() {
  const results = await extractFrames({
    input: `${__dirname}/../giphy.gif`,
    output: `${__dirname}/../frames/frame-%d.png`,
  });
  //   console.log(results)
}

export async function convertFrames(): Promise<string[]> {
  const ret: string[] = [];
  const files: string[] = fs.readdirSync(`${__dirname}/../frames`);

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
