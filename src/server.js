const express = require('express');
const Xray = require('x-ray');
const xray = Xray();

// URL, targeted selector, object literal structure
const reqUrl = 'http://google.com';
const reqSelect = 'title';

const result = xray(reqUrl, reqSelect)(function(err, reqSelect){
  console.log(reqSelect);
});
