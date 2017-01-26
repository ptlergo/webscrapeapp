const Xray = require('x-ray');
const x = new Xray();
console.log('xray run');

/*
* x(url, scope, array of wrapped objects)
* wrapping in [] tells xray to iterate once for each scope(.g). without [] itll
* iterate only once.
* .g is google search result link
*/
x("https://www.google.ca/search?site=&source=hp&q=spice+and+wolf&oq=spice+and+wolf", '.g', [{
   link: 'a@href',
 }]).paginate('#pnnext@href').limit(5)
 ((err, obj) => {
   if(err) {
     callback(err);
   }
   else {
     obj.forEach((item) => {
      //  console.log(obj)
       var start = item.link.indexOf('q=')
       var end = item.link.indexOf('&sa')
       item.link = item.link.substring(start + 2, end)
       // items are links from search result
       console.log(item);
     })
     callback(null, obj)
   }
 })
