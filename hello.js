function printName(){
  var name = document.getElementById('name').value;
  document.getElementById('display').innerHTML = "Hello " + name;
}
function converttoCelsius(){
  var fahrenheit = document.getElementById('fahrenheit').value;
  if(isNaN(fahrenheit))
  {
    alert('Enter valid value');
    return;
  }
  var celsius = (fahrenheit - 32)*5/9;
  celsius = celsius.toFixed(2);
  document.getElementById('celsius').value = celsius;
}
