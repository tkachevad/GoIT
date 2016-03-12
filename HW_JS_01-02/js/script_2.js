var names = [];
for (var i = 0; i < 5; i++) {
  names[i] = prompt("Введите имя", '');
}

var nameUser = prompt("Введите имя пользователя", '');
for (var i = 0; i < 5; i++) {
  // console.log(names[i]);
}

var flag = false;

for (var i = 0; i < 5;  i++) {
if (nameUser == names[i]) {
  flag = true;
    break;
  }
}
if (flag) {
  alert(nameUser+ ', вы успешно вошли');
} else {
  alert('Ошибка');
}
