//1.Write a loop that makes seven calls to console.log to output the following triangle:
for (let i = "#"; i.length < 8; i += "#")
  console.log(i);


  //2. Iterate through the string array and print it contents
  var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

      for(var i in strArray){
          console.log(strArray[i]);
      }

//3.write a code to count the elements in the array . Don’t use length property

var myarray=[11,22,33,44,55];
var count=0;
for(var i in myarray){
    count++;
}
console.log(count);

//Declare an empty array;
var c=[];

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
var food=["apple","orange","tomato rice","curd rice","pizza","burgar","chapathi","dosa","idli","vada","poori",
           "sambar","ice cream","chocolate","parota","chicken","motton","fish","egg","desert"];
//find your fifth favorite food?
for(var i in food){
    if(i=4){
        console.log(food[i]);
      break;
    }
}


//Find the length of your foods array
var count1=0;
for(var i in food){
    count1++;
}
console.log(count1);


//change the element that is currently “Mari” to “Munnabai”.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling1(input){
    for (var i = 0; i < input.length; i++) {
    if(friends[i]==="Mari"){
        friends[i]="Munnabai";
    }
    }
    }
    dataHandling1(friends);
    console.log(friends);



    //Loop and Print the names till you meet CaptianAmerica.
    function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
        if(friends[i]==="CaptianAmerica"){
           var place=friends.indexOf(friends[i]);
        
        }
        }
    for(var j=0;j<place+1;j++){
        console.log(friends[j]);
    }
        }
        dataHandling(friends);




//Find the person is ur friend or not.
        function dataHandling2(input, name){
    
            for (var i = 0; i < input.length; i++) {
            if(input[i]==name){
          return "found";
            }
            }
            }
            let found=dataHandling2(friends,"Jeff");
            console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
            let friends1 = [
                "Mari",
                "MaryJane",
                "CaptianAmerica",
                "Munnabai",
                "Jeff",
                "AAK chandran"
                ];
                var friends2 = [
                "Gabbar",
                "Rajinikanth",
                "Mass",
                "Spiderman",
                "Jeff",
                "ET"
                ];
                var friendslist=[...friends1,...friends2];
                friendslist.sort();
                console.log(friendslist);



                //Get the first item, the middle item and the last item of the array
                var array=[1,2,3,4,5,6,7];
                var middle=parseInt(array.length/2);
                console.log(array[0],array[middle],array[array.length-1]);

                //Add your name to the end of the friends array, and add another name to beginning.
                friends.push("deepa");
                friends.unshift("mithran");
                console.log(friends);


                //Add Mr or Ms to the names in the friends array.
                friends.push("Mr");
                friends.push("Ms");
                console.log(friends);


                //Concat all the names the friends array and return as comma “,” seperated string.
                console.log(friends.join(","));



                //Find the friends names who has letter ‘a’ and return the list
            for(var i=0;i<friends.length;i++){
                
                if(friends[i][0]==='A'){
                    console.log(friends[i]);
                   
                
            }
            }
//Find the avg length of all the friends names. Get the individual length of the names and do the avg.

for(var i=0;i<friends.length;i++){
    c.push(friends[i].length);
}
console.log(c);

const avg=(value,sum)=>sum+value;
var add=(c.reduce(avg,0));
console.log(parseInt(add/c.length));



// Find the names and return the list starting with letter M.
for(var i=0;i<friends.length;i++){
                
    if(friends[i][0]==='m' || friends[i][0]==='M'){
        console.log(friends[i]);
       }
}

//Find the average in the array below.
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", 200, "CaptianAmerica", 8, 10];
var sum=0;
for(var i=0;i<friendsInfo.length;i++){
    if(typeof(friendsInfo[i])==="number"){
        sum=sum+friendsInfo[i];
    }
}
console.log(sum);

//Print the contents of the input variable
var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona”, “Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling3(input){
for (var i = 0; i < input.length; i++) {
console.log(input[i]);
}
}
dataHandling3(input);

//find the culprit
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] ;
}
console.log(new_string);

//find the culprit
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string ="";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] +","; 
}
console.log(new_string);











        
