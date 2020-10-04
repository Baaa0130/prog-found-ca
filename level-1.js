//Question 1
var fish = "fish";


//Question 2
var person = 
{ 
  gender = "female",
  age= 18

};

//Question 3
var outOfStock = true;
if (outOfStock === true)
  console.log ("out of stock");
else
  console.log ("In Stock")


//Question 4
var numbers = [1,2,3,4,5];
for ( var i = 0; i < numbers.length; i++) {
  console.log (numbers[i]);
}

//Question 5
for (var i=15; i<=25; i++) {
  console.log (i);
}

//Question 6
for (var i= 15; i<=25; i++){

if (i === 20)
  console.log (i);
else
  console.log ();
}

//Question 7
var children = [

 {  name = "Carlos",
    age = 8,
    male = true
    
 },
 {
    name = "Lucas",
    age = 2,
    male = true

}
];

for ( var loop =0; loop<children.length; loop++) {
console.log (children[loop].age);
console.log (children[loop].male);
}

//Question 8
function whatIDontLike(dislikes){
  console.log ("I don´t like"+dislikes);
}
whatIDontLike(" cakes");


//Question 9
function subtract(first,second){
  console.log (first-second);
}
subtract(20,7);

//Question 10
var myArray = [];

function accepts(argument){
myArray = argument;
console.log (myArray);
}

accepts(100);