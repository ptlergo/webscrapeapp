const express = require('express');
const Xray = require('x-ray');
const xray = Xray();

// URL, targeted selector, object literal structure
const reqUrl = 'https://soundcloud.com/joey-bada-official/land-of-the-free';
const reqSelect = 'body';

const result = xray(reqUrl, reqSelect)(function(err, reqSelect){
  if(reqSelect != null)
    console.log(reqSelect);
  else
    console.log('error!' + err);
});
