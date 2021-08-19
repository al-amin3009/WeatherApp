let weather = {
    apikey: "c7a6470cd2322ecc522a252ca5ba0fce",
    fetchweather: function (city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid=" 
        + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector('.city').innerHTML = "Weather in "+ name; 
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector('.description').innerHTML = description;
        
        document.querySelector('.temp').innerHTML = temp + "°C"; 

        document.querySelector('.humidity').innerHTML = "Humidity: "+ humidity + "%";
        
        document.querySelector('.wind').innerHTML = "Wind speed: " + speed + " km/h"; 

        document.querySelector(".weather").classList.remove("loading");

        document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + name +"')";
        
    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button")
    .addEventListener("click", function (){
        console.log("clicked");
        weather.search();
});

document.querySelector(".search-bar")
    .addEventListener("keyup", function(event) {
        if(event.key =='Enter'){
            weather.search();
        }
});

weather.fetchweather("Dhaka");

