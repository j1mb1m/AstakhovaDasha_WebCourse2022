var lastName = prompt('Ваша фамилия?');
var firstName = prompt('Имя?');
var patronymic = prompt('Отчество?');

var age = parseInt(prompt('Сколько вам лет?', 18));
var gender = confirm('Bаш пол - мужской??');

var information = 'ваше ФИО: ' + lastName.trim() + ' ' + firstName.trim() + ' ' + patronymic.trim() + '\n'
+ 'ваш возраст в годах: ' + age + '\n'
+ 'ваш возраст в днях: ' + (age * 365) + '\n'
+ 'через 5 лет вам будет: ' + (age + 5) + '\n'
+ 'ваш пол: ' + (gender ? "мужской" : "женский")  + '\n'
+ 'вы на пенсии: ' + ((gender ? age >= 62 : age >= 58) == true? "да" : "нет");

alert(information);

