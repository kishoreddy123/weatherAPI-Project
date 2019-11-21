/*
window.addEventListener('load', () => {
    let lat;
    let long;
    let temp = document.querySelector('.far');
    let timeZ = document.querySelector('.timeZone');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(e => {
           // console.log(e);
            lat = e.coords.latitude;
            long = e.coords.longitude;
           console.log(lat + ' ' + long);
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const API = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=c22603a4c70b43e8321e97df2716d747`;
            fetch(API)
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    // const {temperature, summary} = response.currently
                    // temp.textContent = temperature;
                    // timeZ.textContent = response.timezone;

                });
            
        })
    } else {
        
    }
   // console.log(lat + ' ' + long);
    
})
*/

// const url='https://jsonplaceholder.typicode.com/posts';

const url = 'http://api.openweathermap.org/data/2.5/weather?APPID=c22603a4c70b43e8321e97df2716d747&q=bangalore'


//using XML HttpRequest

/****
 * const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
    console.log('test');
    
    if (this.readyState === 4 && this.status === 200) {
        console.log('inside if');
        
        console.log(Http.responseText)
    } else {
        
    }
 // console.log(Http.responseText)
}
*************/



//Using fetch
/***
     fetch(url)
    .then(data => {
        return data.json();
    })
    .then(e => {
        console.log(e);
        
    })
****/


//Using Fetch with other parameters
/*************
const data = {
    name: 'Said',
    id : 23
};
const otherParam = {
    headers: {
        "Content-type": "application/json; charset=UFT-8",
    },
    body: data,
    method: "POST"
};
fetch(url, otherParam)
    .then(data => {
        return data.json()
    })
    .then(res => {
        console.log(res);
        
    })
    .catch(err => console.log(err))
*********/

//Using Axios

axios.get(url)
    .then(data => {
        console.log(data);
        //document.querySelector('.temper').innerHTML = data.data.main.temp;
        console.log('temperature = ' + data.data.main.temp);
        
    });

// fetch(url)
//     .then(data => console.log(data));

// fetch(url)
// .then(data => {
//     console.log(data);
    
//     return data.json();
// })
// .then(e => {
//     console.log(typeof e);
    
//     console.log(e);
    
// })