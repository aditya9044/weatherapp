var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var country= document.querySelector('.country')
var humid= document.querySelector('.humidity')
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&units=metric&appid=2b9121d6f582c38eadbe570a2b9c7048')
    .then(response => response.json())
    .then(data => {
      var humidValue= data['main']['humidity']
      var countryValue= data['sys']['country'];
      var tempValue= data['main']['temp'];
      var descValue= data['weather'][0]['description'];

      humid.innerHTML='Humidity:  '+ humidValue;
      country.innerHTML='Country:  '+ countryValue;
      temp.innerHTML= 'Temp:  '+ tempValue + ' &#8451';
      desc.innerHTML= 'Description:  '+ descValue;
    })

  .catch(err=> alert("Wrong city name!"))
})
