{
    const APPID = 'c22603a4c70b43e8321e97df2716d747'
   // const cityUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&q=${city}`
    

   //Get weather data using City Name
    document.querySelector('.btn_submit').addEventListener('click', () => {
        const city = document.querySelector('.cityName').value;
        if(city === ''){
            alert('Please Enter the CityName');
        }
        else{
            const cityUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&q=${city}`;
            console.log(cityUrl);
            getResults(cityUrl);
        }

    })

   //Get Weather data using current Location
   document.querySelector('.btn_gps').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(e => {
           const latitude = e.coords.latitude;
           const longitude = e.coords.longitude;
           const urlCoordinates = `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&lat=${latitude}&lon=${longitude}`
           console.log(urlCoordinates);
           getResults(urlCoordinates);           
           
        })
    }
   })
   let count = 0;
  async function getResults(Url){
    
    if (count >= 1) {
        init();
        console.log('in count' + count);
        
    }
    try {

/****************** Using Fetch **************/        
        // await fetch(Url)        
        //         .then((response) => {
        //             return response.json()})
        //         .then((data) => {    
        //             console.log('fetch is called');
        //             console.log(data)
        //         let html = `<div class="temperature"><div class="diaplyTemp"><h1 style='display:inline' class="Name">%city%</h1><h2 style='display:inline' class="temper">%temp%</h2><h1 style='display:inline'>&#8451</h1></div>
        //         <div class="min_max"><div class="min_div" style='float: left;'>Min <h3 class="min" style='display:inline' >%min%</h3> <h2 style='display:inline'>&#8451</h2></div>
        //         <div class="max-div" style='float: right;'>Max <h3 class="max" style='display:inline' >%max%</h3> <h2 style='display:inline'>&#8451</h2></div></div></div>`;
        //         newHtml = html.replace('%city%',`${data.name} - `);
                
        //         newHtml = newHtml.replace('%temp%',Math.round((data.main.temp - 273.15)));

        //         //console.log(newHtml);
        //         newHtml = newHtml.replace('%min%', Math.round(data.main.temp_min - 273.15));
        //         newHtml = newHtml.replace('%max%', Math.round(data.main.temp_max - 273.15));

        //         document.querySelector('.cName').insertAdjacentHTML('afterend', newHtml);
        //         });


/****************** Using axios ***************/

        await axios.get(Url)
            .then((data) =>  {
                console.log('axios is called');
            
                let html = `<div class="temperature"><div class="diaplyTemp"><h1 style='display:inline' class="Name">%city%</h1><h2 style='display:inline' class="temper">%temp%</h2><h1 style='display:inline'>&#8451</h1></div>
                <div class="min_max"><div class="min_div" style='float: left;'>Min <h3 class="min" style='display:inline' >%min%</h3> <h2 style='display:inline'>&#8451</h2></div>
                <div class="max-div" style='float: right;'>Max <h3 class="max" style='display:inline' >%max%</h3> <h2 style='display:inline'>&#8451</h2></div></div></div>`;
                newHtml = html.replace('%city%',`${data.data.name} - `);
                
                
                newHtml = newHtml.replace('%temp%',Math.round((data.data.main.temp - 273.15)));

                //console.log(newHtml);
                newHtml = newHtml.replace('%min%', Math.round(data.data.main.temp_min - 273.15));
                newHtml = newHtml.replace('%max%', Math.round(data.data.main.temp_max - 273.15));

                document.querySelector('.cName').insertAdjacentHTML('afterend', newHtml);                               
                });


                count++;
        
    } catch (error) {
        console.log(error);
        alert('Please Enter full city Name')
    }
  
}

//Init Function
function init(){
    document.querySelector('.cityName').value = '';
    let removeEle = document.querySelector('.temperature');
    removeEle.parentNode.removeChild(removeEle);
   }

}