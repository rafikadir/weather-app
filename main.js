//Show date:
const getDate = document.getElementById('date');
const date = new Date();
const month = date.getUTCMonth() + 1;
const day = date.getUTCDate();
const year = date.getUTCFullYear();
const showDate = day + "/" + month + "/" + year ;
getDate.innerText = showDate;


//Show weather Temparature
const search = document.getElementById('searchBtn');
search.addEventListener('click', function(){  
    const getCity = document.getElementById('getCity').value;
    const city = document.getElementById('city');
    city.innerText = getCity;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=49cec48061c48fd1f463c97107480d41`)
    .then (res => res.json())
    .then (data => {
        const weathertemp = data.main;
        const temperature = weathertemp.temp - 273.15;
        const temp = Math.round(temperature)

        //Write Output on Screen
        const celcious = document.getElementById('celcious');
        celcious.innerText = temp;

        const description = document.getElementById('description');
        description.innerText = data.weather[0].description;
        console.log(data);

        //Show Details:
        const sunriseUnix  = data.sys.sunrise;
        const sunsetUnix  = data.sys.sunset;
        const sunrise = new Date (sunriseUnix*1000);
        const sunSet = new Date (sunsetUnix*1000);
        const srHour = sunrise.getHours();
        const srMin = sunrise.getMinutes();
        const srSec = sunrise.getSeconds();
        const ssHour = sunSet.getHours() - 12;
        const ssMin = sunSet.getMinutes();
        const ssSec = sunSet.getSeconds();
        const srFormated = srHour + ':' + srMin + ':' + srSec + ' AM';
        const ssFormated = ssHour + ':' + ssMin + ':' + ssSec + ' PM';
        const country = data.sys.country;
        const countryName = document.getElementById('country');
        countryName.innerText = country;
        const sr = document.getElementById('sunrise');
        sr.innerText = srFormated;
        const ss = document.getElementById('sunset');
        ss.innerText = ssFormated;
    });
})