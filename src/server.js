const express = require('express');
const Xray = require('x-ray');
const xray = Xray();

// URL, targeted selector, object literal structure
const reqUrl = 'https://soundcloud.com/joey-bada-official/land-of-the-free';
const response = xray(reqUrl);
console.log(response);
