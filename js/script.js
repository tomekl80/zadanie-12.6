'use scrict';

// Datas links veriables
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

// Pin on "Search button"
document.getElementById('search').addEventListener('click', searchCountries);

// Function for search countries
function searchCountries() {
	var countryName = document.getElementById('country-name').value;
	if (!countryName.length) countryName = 'Poland';
	fetch(url + countryName)
		.then(function(resp) {
			return resp.json();
		})
		.then(showCountriesList);
}

// Downloading results
function showCountriesList(resp) {
	countriesList.innerHTML = '';
	resp.forEach(function (item) {
		var liE1 = document.createElement('li');
		liE1.innerText = item.name;
		countriesList.appendChild(liE1);
	})
}