const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "82d6b1d4315a9099adb8f7b5744da7b0",
}
function getWeather() {
    const cityId = document.querySelector('.city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

getWeather();

function showWeather(data) {
    document.querySelector('.city-name').textContent = data.name
    document.querySelector('.country').textContent = data.sys.country
    document.querySelector('.wind-speed').textContent = Math.round(data.wind.speed)
    document.querySelector('.weather-degrees').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.weather-description').textContent = data.weather[0]['description'];
    document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    console.log(data);
}

document.querySelector('.city').onchange = getWeather;
//
// const cities = {
//     745042: "İstanbul",
//     693805: "Simferopol",
//     703448: "Kyiv",
//     688532: "Yalta",
//     324190: "Alanya",
// }