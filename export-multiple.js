/*
This file 'export-too' can be named anything.
*/

const test = () => {
  console.log("Imported Too 'test' function!")
}

const me = () => {
    console.log("Did you test 'me' function too?")
}

// Module Exports
module.exports.test = test;
module.exports.me = me;
