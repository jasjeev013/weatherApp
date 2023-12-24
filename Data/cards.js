let container = document.querySelector('.container');

export let cards =JSON.parse(localStorage.getItem('cardz'));
if(cards==null){
    cards = [{
        city:'Mumbai',
        weather: 'sunny',
        temp: '22',
        humidty:'50',
        wind:'15'
    }];
}



export function updatesCart(data,i){
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
        temp: '22',
        humidty:'50',
        wind:'15'
    });
    localStorage.setItem('cardz',JSON.stringify(cards));
}

export function deleteLast(){
    cards.splice(cards.length-1,1);
    localStorage.setItem('cardz',JSON.stringify(cards));
}

export function resetcards(){
    cards = [{
        city:'Mumbai',
        weather: 'sunny',
        temp: '22',
        humidty:'50',
        wind:'15'
    }];
    localStorage.removeItem('cardz');
    

}

