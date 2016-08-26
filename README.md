# gas-run

> Client side library to call Google Apps Script functions

## Installation

First, install gas-run using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```sh
npm install gas-run --save
```

## Usage

app.js:
```js
import Client from 'gas-run'
const client = new Client();
client.run('echo', 'foo').then(v => {
  document.getElementById('message').innerHTML = v;
})
```

Code.gs
```js
function echo(m) {
  return m;
}
```

index.hml
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Google Apps Script API Javascript client library Example</title>
  </head>
  <body>
    <p id="message"></p>
    <script src="app.js"></script>
  </body>
</html>
```

## License

MIT © [fossamagna](https://github.com/fossamagna)
