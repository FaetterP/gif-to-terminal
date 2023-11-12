import extractFrames from 'gif-extract-frames'

export async function extract(){
    const results = await extractFrames({
        input: `${__dirname}/../giphy.gif`,
        output: `${__dirname}/../frames/frame-%d.png`
      })
      console.log(results)
}
