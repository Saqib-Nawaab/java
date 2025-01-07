

let memes = Symbol("saqi");
// object literal
let MyName = {
    name : "saqib-1-1-1-1-1-1-1",
    "full name" : "saqib nawab",
    memes: "saqi123",
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
// console.log(MyName[memes]);
// console.log(typeof MyName[memes]);
// MyName.email = "aqibanamaajaskasj@.com";
// Object.freeze(MyName)
// MyName.email = "ksjkajkasjakkaskahkas@.com";
// console.log(MyName);
MyName.hello = function(){
    console.log("Hello my");
    
    let  name1 = "Mama";    
    let   age2 =  "22";
    // console.log("Hello mu name is  saqib ");
    console.log("hello " , name1 , " your age is", age2);
}
MyName.hello1 = function(){
    console.log(`helloes whatup, ${MyName.name}`);

    

}

// console.log(MyName.hello());
console.log(MyName.hello1());
// console.log(MyName.hello);

