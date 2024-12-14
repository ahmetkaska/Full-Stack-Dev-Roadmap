const apiKey = '7e3386efafbac69fc43a93a4b3d6357e';
const url = 'https://api.openweathermap.org/data/2.5/';

const setQuery = () => {
    const searchCity = document.getElementById('search-city-txt');
    const cityName = searchCity.value.trim();
    if (cityName) {
        getResult(cityName);
    } else {
        alert("Please enter a city name");
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;

    fetch(query)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(getWeather)
        .catch(error => {
            console.error('Error:', error);
            alert("City not found. Please try again.");
        });
}

const getWeather = (result) => {
    if (result) {
        let city = document.querySelector('.city');
        city.innerText = `${result.name}, ${result.sys.country}`;

        let temperature = document.querySelector('.temp');
        temperature.innerText = `${result.main.temp}°C`;

        let description = document.querySelector('.desc');
        description.innerText = `${result.weather[0].description}`;

        let minmax = document.querySelector('.minmax');
        minmax.innerText = `${result.main.temp_min}°C / ${result.main.temp_max}°C`;
    }
}

const btnCity = document.getElementById('search-city-btn');
btnCity.addEventListener('click', setQuery);
