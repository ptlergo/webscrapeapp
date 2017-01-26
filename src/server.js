const express = require('express');
const Xray = require('x-ray');
const xray = Xray();

// URL, targeted selector, object literal structure
const reqUrl = 'http://www.thefader.com/';
const reqSelect = 'body@html';

const result = xray(reqUrl, reqSelect)(function(err, reqSelect){
  if(reqSelect != null)
    console.log(reqSelect);
  else
    console.log('error! ' + err);
}).write('results.json');
