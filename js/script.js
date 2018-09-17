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
	fetch(url + countryName, { cache: 'no-store' })
		.then(function(resp) {
			return resp.json();
		})
		.then(showCountriesList);
}