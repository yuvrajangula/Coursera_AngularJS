var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contantLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup", keyUp);
}
function keyUp(event) {
  calculatorNumericOutput();
}
function calculatorNumericOutput(){
  student.name = document.getElementById('name').value;
  
var totalNameValue = 0;
for (var i = 0; i < array.length; i++) {
  totalNameValue += student.name.charCodeAt(i);
}
// Insert result into Page
var output = "Total Numeric Value of Person's name is "+ totalNameValue;
document.getElementById('output').innerText = output;
}
