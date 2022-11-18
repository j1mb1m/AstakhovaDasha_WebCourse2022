const countries = {};

function inputCountryInfo() {
   var countryName = prompt("Введите название страны : ");
   var countryCapital = prompt("Введите название столицу для страны \""+ countryName +"\": "); 
   addCountry(countryName, countryCapital);
}

function inputCountry() {
    var countryName = prompt("Введите название страны : ");
    alert(getCountryInfo(countryName))
 }

 function showListCountries() {
    alert(listCountries());
 }

 function inputDeletedCountry() {
    var countryName = prompt("Введите название страны : ");
    deleteCountry(countryName);
 }
   
function addCountry(countryName, countryCapital) {
    countries[countryName] = countryCapital;
}

function getCountryInfo(countryName) {
    if (countryName in countries)
        return "страна: " + countryName + " - столица: " + countries[countryName];
    else
        return "нет информации о стране " + countryName;
}

function listCountries() {
    list = "";
    for (country in countries) {
         list += getCountryInfo(country) + "\n";
    }

    return list;
}

function deleteCountry(countryName) {
    delete countries[countryName];
}
