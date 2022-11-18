var lastName = prompt('Ваша фамилия?');
var firstName = prompt('Имя?');
var patronymic = prompt('Отчество?');

var age = parseInt(prompt('Сколько вам лет?', 18));
var gender = confirm('Bаш пол - мужской??');

alert('ваше ФИО: ' + lastName.trim() + ' ' + firstName.trim() + ' ' + patronymic.trim() + '\n'
+ 'ваш возраст в годах: ' + age + '\n'
+ 'ваш возраст в днях: ' + (age * 365) + '\n'
+ 'через 5 лет вам будет: ' + (age + 5) + '\n'
+ 'ваш пол: ' + getGender(gender) + '\n'
+ 'вы на пенсии: ' + ((gender ? age >= 62 : age >= 58) == true? "да" : "нет"));

function getGender(gender) {
    if(gender) {
        return "мужской";
    }
    else {
        return "женский";
    }
}

function isRetired(gender, age) {
    if(gender && age >= 62 || !gender && age >= 58) {
        return "да";
    }
    else {
        return "нет";
    }
}