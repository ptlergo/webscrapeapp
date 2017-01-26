const Xray = require('x-ray');
const x = new Xray();
console.log('xray run');

x("https://www.google.ca/search?site=&source=hp&q=spice+and+wolf&oq=spice+and+wolf", '.g', [{
   link: 'a@href',
 }]).paginate('#pnnext@href').limit(5)
 ((err, obj) => {
   if(err) {
     callback(err);
   }
   else {
     obj.forEach((item) => {
       var start = item.link.indexOf('q=')
       var end = item.link.indexOf('&sa')
       item.link = item.link.substring(start + 2, end)
     })
     callback(null, obj)
     console.log(callback());
   }
 })
