import { cards,updatesCart,addByDefault,deleteLast,resetcards} from "../Data/cards.js";
import { weatherS } from "../Data/weather.js";

const apikey = "2ec773174354f87c17f24f022529afcd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


let container = document.querySelector('.container');
function weathers(){
    updateHTML();
    async function checkWeather(city,index) {
        const response = await fetch(apiUrl + `&q=${city}&appid=${apikey}`);
        var data = await response.json();
        updatesCart(data,index);
        updateHTML();
    
    }

    function updateHTML() {
        let html = '';
        for (let i = 0; i <=cards.length; i++) {
            if(i==cards.length){
                let aele =`
                <div class="add-more-but">
                    <button  class="add-more"><img src="./Images/plus.png" alt="more" width="100px" height="100px" class="add-mor"></button> 
                    <button  class="add-mor1"><img src="./Images/minus.png" alt="minus" width="100px" height="100px" class="add-mor"></button>
                    <button  class="add-mor2"><img src="./Images/reset.png" alt="reset" width="100px" height="100px" class="add-mor"></button>
                </div>`;
                html += aele;
                break;
            }
            let weatherSrc='./Images/sunny.png';
            for (let j = 0; j < weatherS.length; j++) {
                const element = weatherS[j];
                if(element.weather == cards[i].weather.toLowerCase()){
                    weatherSrc = element.src;
                }
                
            }

            let element =`
            <div class="item">
                <input type="text" class="inputs" data-index-id="${i}" placeholder="Enter City...">
                <button class="search"><img src="./Images/search.png" alt="" width="20px" height="18px"></button>
                <img src="${weatherSrc}" alt="Sunny" width="90px" height="90px" class="weather-img">
                <div>
                    <h1 class="temp">${cards[i].temp}°C </h1>
                    <h4 class="city">${cards[i].city}</h4>
                </div>
                <div class="extras">
                    <img src="./Images/humidity.png" alt="humidty" width="50px" height="50px" class="humid">
                    <h3 class="humidText">${cards[i].humidty}%</h3>
                    <img src="./Images/windspeed.png" alt="windSpeed" width="60px" height="60px" class="windSpeed">
                    <h3 class="windText">${cards[i].wind}km/h</h3>
                </div>
            </div> `;
            html+=element; 
            
        }
        container.innerHTML = html;

        let buttons = document.querySelectorAll('.search');
        let inputBox = document.querySelectorAll('.inputs');
        for (let i = 0; i < inputBox.length; i++) {

            const element1 = buttons[i];
            const element2 = inputBox[i];
            element1.addEventListener('click',()=>{
                checkWeather(element2.value,element2.dataset.indexId);
                updateHTML();
            });
        }
    
        document.querySelector('.add-more').addEventListener("click", () => {
            addByDefault();
            updateHTML();
        });

        document.querySelector('.add-mor1').addEventListener("click", () => {
            deleteLast();
            updateHTML();
        });
        document.querySelector('.add-mor2').addEventListener("click", () => {
            resetcards();
            updateHTML();
        });

        
    
    }
}
weathers();