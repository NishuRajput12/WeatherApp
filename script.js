const searchbox = document.querySelector(".search-container input");
const searchbtn = document.querySelector(".search-container i");
const WeatherImg=document.querySelector(".Weather-img");

const apikey = "80ddee016ea6bf036130170c0385225a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".img-section").style.display = "none";
        return;
    }
    else{
    const data = await response.json();
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main=="Clouds"){
        WeatherImg.src="images/clouds.png"
    }
     else if(data.weather[0].main=="Clear"){
        WeatherImg.src="images/clear.png"
    }
     else if(data.weather[0].main=="Rain"){
        WeatherImg.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        WeatherImg.src="images/drizzle.png"
    } 
    else if(data.weather[0].main=="Mist"){
        WeatherImg.src="images/mist.png"
    }
   document.querySelector(".img-section").style.display ="block";
   document.querySelector(".error").style.display="none";

}
}

searchbtn.addEventListener("click", () => {
   
    checkWeather(searchbox.value);

});
