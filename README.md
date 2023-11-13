# gif-to-terminal

Run server and print any gif in terminal using curl.  
Inspired by [parrot.live](https://github.com/hugomd/parrot.live).

[original gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRodHRkMXdmdDgxdG5udmFrNGtyOThoNmJhbTd0cDR3ZGJ6cGNodiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QUeB3UcEX4KeYXPTzO/giphy.gif)  
Animation output:  
![image](https://github.com/FaetterP/gif-to-terminal/assets/56697273/2c4a624b-28c3-403f-8553-cbd62f7e635b)

## Prepare

```sh
git clone https://github.com/FaetterP/gif-to-terminal.git
cd git-to-terminal
npm i
```

Next fill `config.json`.

```js
{
  gifPath: "/giphy.gif",  // path to gif
  size: 50,               // size of final image (symbols)
  color: true,            // is colored
  outputDir: "/frames",   // folder for frames

  port: 3000,  // server port
  delay: 20    // delay between print frames
}
```

## Run

Run using ts-node.

```sh
npm run dev
```

Build and run.

```sh
npm run build
npm run start
```

## Using

```sh
curl localhost:3000
```
