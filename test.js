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

/*----------------------------------------------------------------------
Example import #1
Require & execute one function exported as a module from another file

The 'export' file contains an unnamed module, so you can assign it any 
variable name, such as 'importedModule'.
Since the 'export' file exports only a single unnamed module, the module
is not added to an object {} of multiple properties (see below example)
----------------------------------------------------------------------*/
const importedModule = require('./export');

importedModule();


/*----------------------------------------------------------------------
Example import #2
Require & execute multiple functions exported as modules from another file

The 'export-multiple' file contains two named modules, so you need to 
refer to them by the name they were given on export 
Since the 'export-multiple' file exports more than one module, the 
modules are added to an object {} so to access them you must use their
specific name(s) surrounded by {}.  
If you only needed to use one of the exported modules from export-multiple
you would write: const { me } = require...
----------------------------------------------------------------------*/
const { test, me } = require('./export-multiple');

test();
me();
