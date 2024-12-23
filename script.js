//console


var sugarbox = "sugar"

console.log(sugarbox)


//data types 

//primitive

//non primitive



// var

// let

// const

// what is variable


var a = 10;   //redeclare
    a = 5;     // reassign
console.log(a);


// var data type is support redeclare values and resign values


// let variables


// let a = 5;  //it's cannot redeclared
//     a = 10;  // it's support reassign
// console.log(a);


// let data type is not support redeclared values
// let data type is support reassign values


// const a = 10;  // it's cannot redeclared
//       a = 10;  // it's cannot reassign
// console.log(a);


 //const data type not support redeclard and reassign values


 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//



                                     //Non primitive


 //array  - [] - collection of values and datas within the square brackerts


 const arr = ["hello",10,10.9,false,null]
 console.log(arr[3]);


 //length = starts with 1
 //index = starts with 0
 //length-1 = index

 

                                //what is object

                                //object-{} collection of key and value pairs

   const obj ={
    name:"sharvesh",
    age:25,
    std:"x11"
   }
   console.log(obj);


   
   //syntax

  //  key : values;

//  const obj = {




//what is function

//function : block of code

//function var_name(){
//code

//}

//var_name()


// function house(){
//     var boy = "birthdayboy"
// console.log(boy);


// var relative = "relative frnds"
// console.log(relative);
 
// }
// house()


// parameter & arguments :

// parameter- is like an variable_name

//arguments- is like an value


function box(x){
    console.log(x);
    
}

box(10) // arguments<=> value



var a = 100
console.log(a);


//return statement

function box(x) {
    return x
}
console.log(box("hello js"))



// function expressions

var bigbox = function smallbox(){
    console.log("Teddy bear here");
    
}

bigbox()


function test(x,y){
    console.log(" hello " + x + " how are you " + y);
    
}
test("jai", "shrish")




function test (x,y,z){

    console.log(" Hi " +  x + " how are you " + y  +  " welcome "  + z   );
    
}
test("sharvesh", "raju", "seshan")



//imediate invoke function expressions

// it is global level
// it is support only before functions name is not there its working
//othervise you store the variable name in function

(function(x){
    console.log(x);
    
}
) ("java")


// var name = (function(x)){
console.log(x);

//}("java")

//arrow function : short hand system:

//syntax:
//()=> {}

    var arrow =(x) => {console.log(x)}

    arrow("happy")


               //operators:

    //Arithmetic operator  (add,sub,mull,div,modules,exponent(power value),increment,decrement)
    //Assignment operator
    //Logical operator
    //Equality operator
    //comparsion operator
    //ternary operator

    

    //Arithmetic operator (addition)  (it is create two vari)

    var num = 2
    var num1 =10
    console.log(num+num1);   //(Addition)


    var num = 2
    var num1=5
    console.log(num**num); // 2**5 // 2*2*2*2*2  //exponent(power value)

    var num = 15
    var num1 = 10
    console.log(num-num1);    // sub ()

    var num = 10
    var num1 = 5
    console.log(num*num1);  // mull 


    var x = 10
    var y = x++
    console.log(x);   //increment 



    var x = 20
    var y = x--
    console.log(x);
    
    
    var x = 15
    var y = 5
    console.log(x/y);  // division


     //Assignment operator  (mulitiple values stored in one variable)

    var num = 10
    num += 50
    console.log(num);
    

    //Logical operator:

    //&& =>And
    // || => or
    // ! => not
    

    var num = 10
    var num2 = 10
    console.log(num !=num2);   //  not symbol


    // ||

    var num =10
    var num1 = 5;
    let num2 = 7;

    if(num!=10 || num1!=5 || num2!=3){
         console.log("seshan-true");
    }
    // console.log();
    


    //Equality operator [interview questions]
    //double equals[loose equality]
    // it only check the values not the data type

    var de = 10
    var de2 = "10"
    console.log(de==de2);


    //triple equals === (strictly equality)
    // it wil check both the values and data types)

    var de = 10
    var de2 = "10"
    console.log(de===de2);


    //Compression operator

    var de = 10
    var de2 = 10
    console.log(de<de2);

    //Ternary operator

    //syntax :

    //(condition) ? "statement_true" : "statement_false"


var age = 25
var limit = (age>18) ? "he is eligible" : "he is not eligible"

console.log(limit);


//function and arguments using program


     function agelimit(x) {

     var limit = (x>=18 && x<=75)   ? "he is eligible for vote" : "he is not eligible for vote"

    console.log(limit);
    
}
agelimit(90)



//Addition and  not working in string

// a=1
// b="1"
// console.log(a-b)




//Loop:

// for loop
// while loop
//do while loop


// syntax for loop :


//for(initialization ; condition; iteration[increment++,decrement --]){

//code

//

//}


increment

for(var i = 0; i<5 ; i++) {

    console.log(i);
    
}

//steps:

// step1: => i = 0 => 0<5 [true] => print = 0 => 0++ = 1
// step2: => i = 1 => 1<5[true] => print = 1 => 1++ = 2
//step3: => i = 2 => 2<5[true] => print = 2 => 2++ = 3
//step4: => i = 3 => 3<5[true] => print = 3 => 3++ = 4
//step5 : => i = 4 => 4<5[trur] => print = 4 => 4++= 5
//step 6: = > i = 5 => 5<5[false]  --------------------- the loop is false so not executed the code


//output: 0,1,2,3,4


// decrement task

//decrement

//for(initialization ; condition; iteration[increment++,decrement --]){


for(var i = 5; i<0 ;i--)  {

    console.log(i);
    
}


// string  using loop 

// task:1
// horisantal

var str = "happy"

var a="";

for (var i = str.length-1; i>=0; i--){

    a = a+" "+str[i];
    }
console.log(a);


// task 2 :
// addition numbers

var x = 0

for (var i = 0; i<=10; i++) {

var x=i+x

console.log(i);
}
console.log(" this is the total count values " + x );



var str = "happy";
// a = "";
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);

    // a =a+""+str[i]
}
// console.log(a);



var str = "happy";

for(var i = str.length-1 ; i>=0; i--){

console.log(str[i]);

}


var a = 0;
for (var i = 0; i <=10; i++) {
    console.log(i);

    var a = a+i
}

console.log("the total count is" + a);



for (var i = 5; i >0; i--) {
  
    console.log(i);
    
}



//while loop  (entry level condition)

var count = 0 // intialization

while (count<5) { // condition

    console.log(count); // printing // iteration

    count++
    
    
}

// let number = 1 ;

// while (number<=5) {

//     console.log(number);
//     number++ ;
    
// }



// let num = 5
// let i = 1;
// console.log('mulitiplication on table of ${5}');

// while (i<=10) {

//     console.log('${num} x $ {i} = $ {num * i}');
    
//     i++
// }

//while loop


var i = 1 ;
var num = 6;
var limit = 10;

console.log("multiples of 6 :");

while (i<=limit) {

    console.log(`${num} x ${i} = ${num * i}`);
    i++
}



// do while  : exit level conditional checking


var docount = 0

do {
    console.log(docount);
    
    docount++
} while (docount<5);


var i = 1;
var count = 8;
var limit = 10;

console.log("mulitiple of 8 :");

while (i<=limit) {
    console.log(`${count} x ${i} = ${count * i}`);
    i++
}

//---------------------------------------------------//

//if else
// syntax:
// if(condition) {
///} else{
//}


var age = 20
if (age>=18) {

    console.log("he is eligible for vote");
    
    
} else {

    console.log("he is  not eligible");
    
    
}



for (var num = 0; num <= 10; num++) { 
    if (num % 2 ==0) {              
        console.log(num);          
    }
}


//odd number

for(var number = 1; number<=10; number++)
    if (number%2==1) {
        console.log(number);
        
    }

 //if else statement

 var mark = 60

if (mark>=90 && mark<=100) { // false
    console.log("Grade a");

    }else if (mark>=80) {

    console.log("grade is b");

    }else if(mark>=60){

        console.log("Grade is c");
} else {
        console.log("Faill");
        
}
        

// task : if else


// share auto 8 => "auto will move"

// less than 8 => "auto will wait for passengers"

// greater than = "drop the passangers"


var a = 6;

if(a==8)
    console.log("Auto will start");

else if(a<8)
    console.log("Auto will wait");

else
    console.log("Drop the passenger");



//Array methods


// push (it will be added the values in the last of an array)


let bc = ["vignesh","sakthi","mani"]
bc.push("sabari")
console.log(bc);


// pop - it will remove the last value in the array
bc.pop()
console.log(bc);


//unshift : it will add the values in the beginning of the array

let rollcoster = ["ajay", " sharvesh"]

rollcoster.unshift("kishor")

console.log(rollcoster);


//shift : it will remove the values in the beggining

rollcoster.shift()

console.log(rollcoster);


//concat:

var frutis = ["banana","apple","iceapple"]
var veg = ["carrot","betroot","cucumber"]
var cos = ["powder","scent"]

var cover = frutis.concat(veg,cos)
console.log(cover);


// sort:


const arrnum = [2,1,8,4,9,7,6,5,3]

arrnum.sort((a,b)=> a-b);


//if the result of a - b is negative, a is placed before b
//if the result is positive, b is placed before a .// b a
//if thr result is zero the order remains unchanged (which is revelent for elements are equal)

// starting array : [2,1,8,4,9,7,6,5,3]

// comparison between 2 and 1 :

//2-1 = 1 ; since the result is positive , 2 should come after 1.
//updated array : [1,2,8,4,9,7,6,5,3]\


// comparison between 1 and 8 :



var num = [5,3,1,2,7,8,9,6,10,4]
num.sort((a,b) =>a-b)
console.log(num);



//string using sort  assending order (IT is first taken capitial leters words)


var char = ["Zendya","anbu","Kumar","bala"]  //Ascii - american standard code for information interchange
char.sort()
console.log(char);


//slice ()it is cut method ()

var birds = ["eagle","pigeon","vulture","peacock","crow"]
var slice = birds.slice(2)
console.log(slice);


//splice

//syntax

// var_name.splice(index, counter [0&1]) , value)

// 0 => push and update the value

// 1 => replace and update values


const weeks = ["Monday","tuesday","wednesday"]

weeks.splice(2,0,"sunday")

console.log(weeks);


//string methods


//split
//string to array

var str = "hello world !"

var spl = str.split(" ")

console.log(spl);


//join

// array to string  join

var join = spl.join("-")
console.log(join);


// reverse :


var rev = "javascript"
var rev2 = rev.split("").reverse().join("")
console.log(rev2);


// task

//concat to reverse using input


//concat

var ios= ["iphone11","iphone14","iphone15"]

var android = ["samsung","realme","oneplus"]

var windows = ["Nokia"]

var mobile = ios.concat(android,windows)

console.log(mobile);


// sort using numbers

    var arraynum = [2,10,15,1,7,9,3,13]
    arraynum.sort((a,b)=> a-b)
    console.log(arraynum);


 //string using sort


    var str = ["Kishore","raju","Seshan","visnu","anbu"]
    str.sort()
    console.log(str);

    
  // slice

    var movies = ["leo","ayan","coolie","goat"]

    var slice = movies.slice(2)

    console.log(slice);


// splice

    var carmode = ["audi","lambo","nano","mercedes"]

    carmode.splice(2,0,"Mt")

    console.log(carmode);


//split and join

var park = "welcome to the park"

var child = park.split(" ").join(" - ")

console.log(child);

 //reverse

var str = "Gameofthrons"
var reverse = str.split("").reverse().join("")
console.log(reverse);


// touppercase


var up = "chennai"

console.log(up.toUpperCase());


// to lowercase

var low = "NETWORK"
console.log(low.toLowerCase());


//index of // first occurrence

var idx = "chennai"
console.log(idx.indexOf("a"));


// lastindex of occurrence

 var idx = "mumbaai"
 console.log(idx.lastIndexOf("a"));
 

 //include

 var inc = "happy"
 var inc2 = inc.includes("H")
 console.log(inc2);

 // replace


 var word = "hello world"
 console.log(word.replace("hello","welcome"));


 //repeat

 var rep = "hi"
 console.log(rep.repeat(4));


 //substring

 var sub = "goodmorning"
 console.log(sub.substring(4));
 
 //startswith

 var sw = "morning"
 console.log(sw.startsWith("m"));

 // ends with

 //task

 //trim

 var tr = "nope"
 console.log(tr.trimStart());

 //charat

 var  char = "happy"
 console.log(char.charAt(1));

//-----------------------------------------------------------------------------------------------------------------------


            //object : Collection of key value pairs

            // json : javascript object Notation


            var obj1 = {

                name:"sharvesh",
                age: 20,
                dep:"It"
            }

            console.log(obj.name);


            //update the values

            //obj.name = "gopal"
            //console.log(obj);
            

    // Nested array and object :

    const stdobj = [

        {
             name :"hari",
             age : 18,
             std:"vI"

        },

        {

             name :"sharvesh",
             age : 18,
             std:"vI"
        },


       

        {

            name :"axshay",
            age : 25,
            std:"vI"
       },
       

    ]
            

    console.log(stdobj[2]);



    //Task

    // office id card - name,dep,id,no,grp -- 5 obj create pannanum and 2 obj (full deatils)  and 4 obj [id,no,dep] mattum vanum



    const office = [
        {
           name: "sharvesh",
           dep: "backend developer",
           id : 16523,
           bloodgroup: "b+"
        },

        {
            name: "kishore",
            dep: "frontend developer",
            id : 16523,
            bloodgroup: "a+"
         },

         {
            name: "hari",
            dep: "sql developer",
            id : 145731,
            bloodgroup: "o+"
         },

         {
            name: "seshan",
            dep: "full stock developer",
            id : 135689,
            bloodgroup: "b+"
         },

         {
            name: "raja",
            dep: "tester",
            id : 135689,
            bloodgroup: "b+"
         },
    ]
      console.log(office[2]);
      console.log(office[4].id,office[4].dep);


//Object destructuring  (de structure format)


   var obj1 = {

      name : "jai",
      age: 20,
      dep :"IT"

   }

   var {name,age,dep} = obj1
   console.log(name,age,dep);


   //array using destructuring

   var arr1 = ["sunday","monday","tuesday","friday"]

   var [day1,day2,day3,day4] =arr1

   console.log(day1);
   

//<-------------------------------------------------------------------------------------------------->

//For methods:

//For Each - to read the array

//syntax:

//var_name.forEach((value,index,acctualarray) =>)


    var arr2 = ["sunday","monday","tuesday","wednesday"];

    arr2.forEach((val,idx,accarr) => console.log(val,idx,accarr));



    
// for in = objeact loop and read

//syntax

//for(var_type var_name in obj_name){}


// name <=> sakthi
//city <=> newyork
//country <=> "america"

//task  two object create pannaum
//2 vathu objeact for in use panni edukanum


var obj1 = {
    name: "sakthi",
    city: "newyork",
    country: "america"
};

for (var x in obj1) {
    console.log(x + " <=> " + obj1[x]);
}



//Task:
//two objects using

var obj1 = {
    name: "sakthi",
    city: "newyork",
    country: "america"
};

var obj2 = {
    name: "john",
    city: "london",
    country: "england"
};

for (var x in obj2) {
    console.log(x + " <=> " + obj2[x]);
}



var obj1 = [
    {
        name: "sakthi",
        city: "newyork",
        country: "america"
    },
    {
        name: "sharvesh",
        city: "london",
        country: "england"
    }
];

for (var x in obj1[1]) {
    console.log(x + " <=> " + obj1[1][x]);
}




//for of 

let str = "java"
for(var x of str) {

    console.log(x);
    
}


//Mrf
//Map,reduce,filter

// syntax:

//var_name.Map((value,index,acctualarray)=>)

    var num = [1,2,3,4,5,6,7,8]
    var map = num.map((val,idx,accarr) => val*2)
    console.log(map);


    //reduce

    // syntax

    // var_name.reduce((accumulator,value,index,actual array))
    

    var reduce = num.reduce((acc,val)=>acc+val,5) // 5 + 1 = 6 + 2 = 8+3
    console.log(reduce);
    

    //filter :
    // syntax :
    // var_name.filter((value,index,acctualarray))

    var filter = num.filter((val,idx,accarr) => val%2==0)
    console.log(filter);
