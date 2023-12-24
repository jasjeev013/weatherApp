let container = document.querySelector('.container');

export let cards =JSON.parse(localStorage.getItem('cardz'));
if(cards==null){
    cards = [{
        city:'Mumbai',
        weather: 'sunny',
        temp: '22°C',
        humidty:'50%',
        wind:'15km/h'
    }];
}



export function addToCart(data,i){
    cards[i]={
        city: data.name,
        weather: data.weather[0].main,
        temp: data.main.temp,
        humidty: data.main.humidity,
        wind: data.wind.speed
    };
    localStorage.setItem('cardz',JSON.stringify(cards));

};

export function addByDefault(){
    cards.push({
        city:'Mumbai',
        weather: 'sunny',
        temp: '22°C',
        humidty:'50%',
        wind:'15km/h'
    });
    localStorage.setItem('cardz',JSON.stringify(cards));
}

