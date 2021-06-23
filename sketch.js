

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable');
function setup(){
  var b2 = createButton("click here to Swap the numbers");
 b2.mousePressed(swap);
  }


function draw(){
  background = "red";
}
function swap(){
  [a,b]=[b,a];

  console.log("the valueof a after swapping:",+a);
  console.log("the valueof b after swapping:",+b);

}