const express = require('express');
const Xray = require('x-ray');
const xray = Xray();
console.log('xray run');
app = express();

// URL, targeted selector, object literal structure
const reqUrl = 'https://blog.ycombinator.com/';
const reqSelect = '.post';

app.get('/', (req, res) => {
  const stream = xray(reqUrl, reqSelect, [{
    title: 'h1 a',
    link: '.article-title@href',
  }]).stream();
  stream.pipe(res);
});

const server = app.listen(3000, () => {
  console.log('listening to 3000');
});
