"use strict"
let message;
let login = prompt("Представьтесь, пожалуйста", '')
message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина': '';
alert(message)