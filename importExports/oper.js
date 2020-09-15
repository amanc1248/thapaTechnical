const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a -b;
}

const mul  = (a,b)=>{
    return a*b;
}
//1) exporting the add function
module.exports = {add,sub,mul};