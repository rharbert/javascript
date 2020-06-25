/*
This file 'export' can be named anything.
*/

const thankYou = () => {
    console.log("Imported, thank you!")
}

/*
Here, we are not 'naming' the exported module, so when you import
it from another file, you can assign it any variable name you like.
However, if you want to give this module a specific name, it would 
be done like this:
  module.exports.thankYou = thankYou
    -or-
  module.exports.anyModuleName = thankYou
*/
module.exports = thankYou;
