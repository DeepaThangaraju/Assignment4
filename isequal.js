var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var len=Object.keys(obj1).length;
var count=0;
console.log(len)  ; 
for(var key in obj1){
    for(var key1 in obj2){
        if(obj1[key]==obj2[key1]){
            console.log("equal");
        }
    }
}
