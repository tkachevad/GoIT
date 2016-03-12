x = prompt("Введите x", '');
n = prompt("Введите n", '');

while (n < 0) {
  alert('Введите целую степень, большую 0');
  n = prompt("Введите n", '');
}

console.log('x^n =', pow(x, n));

function pow(x, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}
