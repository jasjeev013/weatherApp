const apikey = "2ec773174354f87c17f24f022529afcd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


let input = document.querySelector('.my-class');


function giveWeather(){
    checkWeather(input.value)
}


async function checkWeather(city){
    const response = await fetch(apiUrl+`&q=${city}&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    console.log(data.weather[0]);
}