const express = require('express');
const Xray = require('x-ray');
const xray = Xray();
console.log('xray run');
app = express();

// URL, targeted selector, object literal structure
const reqUrl = ['http://blog.ycombinator.com/', 'http://8pounds.com'];
const reqSelect = '.post';

app.get('/a', (req, res) => {
  const stream = xray(reqUrl[0], reqSelect, [{
    title: 'h1 a',
    link: '.article-title@href',
    arthur: 'span a',
    excerpt: 'p',
    thumbnail: 'div iframe'
  }]).paginate('.nav-previous a@href').limit(3)
  .stream();
  stream.pipe(res);
});

app.get('/b', (req, res) => {
  const stream = xray(reqUrl[1], '#posts_holder', [{
    title: 'h5',
  }]).stream();
  stream.pipe(res);
});

const server = app.listen(3000, () => {
  console.log('listening to 3000');
});

// .article-title@href
