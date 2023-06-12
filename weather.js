const apikey = "fa5f5752dc291d592e3300e984e25f0b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
async function checkWeather(){
    const response = await fetch(apiurl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();