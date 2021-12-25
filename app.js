//API Key:
function getWeather(cityName){
    const url=  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=698df54500984ff7186c2822c0870391&units=metric`  ;

// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // if there is a success this will run
    const messageElement=document.getElementById("message");
    messageElement.innerText = `It is now ${response.data.main.temp} C `;
    messageElement.style.color="blue";

    
  })
  .catch(function (error) {
    //if there is an error this will run
    const messageElement=document.getElementById("message");
    messageElement.innerText="This city cannot be found. Please try a valid city name";
    messageElement.style.color="red";  
  });
  
}

  
window.onload=function(){
    document.getElementById("btn").addEventListener("click", function() {
        let cityName= document.getElementById("city-name").value;
        getWeather(cityName);
     
    });
}
