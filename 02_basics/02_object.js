

let memes = Symbol("saqi");
// object literal
let MyName = {
    name : "saqib",
    "full name" : "saqib nawab",
    [memes]: "saqi123",
    age : 19,
    city : "Chunian",
    email : "saqibnawab1051@gmail.com",
    isLogin : false,
    lastLogin : ["Monday", "Sunday"]
}
// console.log(MyName.email);
// console.log(MyName["email"]);
// // console.log(MyName.full name);
// console.log(MyName["full name"]);
// console.log(MyName["memes"]);
console.log(MyName[memes]);
console.log(typeof MyName[memes]);

