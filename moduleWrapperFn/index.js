//here we are exploring about the wrapper function
(
    //this is the wrapper function, by default wrapper function is in the node module.
    //everything inside the node file, is wrapped by the wrapper function. And in that way, we can use the require, module,__dirname and all that.
    function (exports, require, module, __filename, __dirname) {
        //here are just the few examples of using module, exports,etc
        
        
        /* here at the moment we are requiring filesystem module,*/
        // const a  = require('fs');
        const name = "aman";
        console.log(name);
    }
);