declare module "gif-extract-frames" {
  declare function extractFrames(options: {
    input: string;
    output: string;
  }): Promise<{
    data: Uint8Array;
    shape: number[];
    stride: number[];
    offset: number;
  }>;
  export = extractFrames;
}
