const apiKey = `33a248349c456f64a81b25ba98a82023`
const temperatureClick = () => {
    const inputText = document.getElementById('input-text').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}&units=metric`;
    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))

}

const cityInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    // console.log(temperature)
    cityInnerText('city', temperature.name);
    cityInnerText('frToTem', temperature.main.temp);
    cityInnerText('condition', temperature.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
    
}