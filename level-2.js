//Question 1
for (var i=15; i<=25; i++) {
    var even=i%2;
    if (even === 0)
    console.log (i);
    else
    console.log ();
  }

//Question 2
function innerfunction(function1){
  console.log ("I am a function")
}
var innerFunction = inner;

function outerFunction(function2){
    innerFunction(function1);
}

outerFunction(function2);

