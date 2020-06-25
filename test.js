/*
This code can execute here/on your computer because Node.js is 
installed on your PC. I had previously installed it to run gulp tasks. 
Node.js is a runtime environment for servers for processing JS code. 
A server is simply a computer, similar to a PC or mac, that is 
configured for handling remote requests such as those made using the
internet --> in this case, your PC is the 'server' on which Node.js runs.

Import a module/function that has been exported from another file.
The 'require' expression looks for the file 'export' starting from 
the current directory -> indicated by the './' which means '.' 
start from the current '/' directory in which this test.js file is 
located, and find a file named 'export'.

Node.js is a JS runtime, so it assumes the file extension is .js 
so you do not need to include it but you can if you want to, it is 
standard practice to exclude it.
*/ 
const importedModule = require('./export');


importedModule();
