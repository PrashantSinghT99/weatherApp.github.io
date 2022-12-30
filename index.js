const city = document.getElementById('citytext');
const apiId = `c74b993ad443788b419f3ac304b63bea`;
const button = document.getElementById('button');
const display = document.getElementById('display');
const extradetails = document.getElementById('extradetails');
const inputEle = document.getElementById('citytext');
// const data='';
// const list = document.getElementById("display");

button.addEventListener('click', () => {
    let cityName = city.value;
    console.log(cityName)
    console.log("button clicked");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiId}`;
    fetch((url),
        {
            origin: "cros"
        })
        .then(response => response.json())
        .then(data => {
            let weather = data.weather[0].main;
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;
            let temp = (data.main.temp - 273.15).toFixed(2);
            let min_temp = (data.main.temp_min - 273.15).toFixed(2);
            let max_temp = (data.main.temp_max - 273.15).toFixed(2);
            let humidity = data.main.humidity;


            display.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png">` + `<div class="weather">${weather}

            </div>`+ `<div class="weather">${description}
    
            </div>`+ `<div class="weather">${temp}&#8451;
    
            </div>`+ `<img src="http://openweathermap.org/img/w/${icon}.png">`

            extradetails.innerHTML = `<div class="extradetails">MinTemp:${min_temp}&#8451;</div>` + `<div class="extradetails">MaxTemp:${max_temp}&#8451;
    
            </div>`+ `<div class="extradetails">Humidity:${humidity}
    
            </div>`
            

            setTimeout(() => {
                inputEle.value = '';
            }, 10000)

        })
        .catch(err => alert("Wrong city name!"))
})

