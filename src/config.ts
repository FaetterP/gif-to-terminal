import fs from "fs";

type ConfigType = {
  gifPath: string;
  size?: number;
  color: boolean;
  outputDir: string;

  port?: number;
  delay?: number;
};

const fileConfig = JSON.parse(
  fs.readFileSync(`${__dirname}/../config.json`, "utf-8")
) as ConfigType;

export const config: Required<ConfigType> = {
  size: 30,
  port: 3000,
  delay: 20,
  ...fileConfig,
  gifPath: `${__dirname}/../${fileConfig.gifPath}`,
  outputDir: `${__dirname}/../${fileConfig.outputDir}`,
};
