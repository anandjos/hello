function printName(){
  var name = document.getElementById('name').value;
  document.getElementById('display').innerHTML = "Hello " + name;
}
function clear(){
  document.getElementById('fahrenheit').value = '';
  document.getElementById('celsius').value = '';
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
function converttoFahrenheit(){
  var celsius = document.getElementById('celsius').value;
  if(isNaN(celsius))
  {
    alert('Enter valid value');
    return;
  }
  var fahrenheit = 32 + 9/5*celsius;
  fahrenheit = fahrenheit.toFixed(2);
  document.getElementById('fahrenheit').value = fahrenheit;
}
function convert(){
  if(document.getElementById('fahrenheit').value !== '')
    converttoCelsius();
  else if(document.getElementById('celsius').value !== '')
    converttoFahrenheit();
  else
    alert('Enter one field');
}