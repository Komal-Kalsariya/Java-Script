



const showdata=(data)=>{
    let temp=` <div class="container">
    <h1>Weather Cards</h1>
    <div class="container__inner">
      <section class="weatherCard partialy-cloudy">
        <div class="title__container">
          <div class="weatherIcon"><i class="fa-solid fa-cloud-sun"></i></div>
          <div>
            <div class="title">Weather Today</div>
            <div class="city">${data.name},${data.sys.country}</div>
          </div>
        </div>
        <div class="main">
          <div class="temperature">
            <b class="temperature__max">${data.main.temp_max}ºC</b>
            <b class="temperature__min">${data.main.temp_min}ºC</b>
          </div>
          <div class="forecast">${data.weather[0].main}</div>
        </div>
        <div class="info__container">
          <div class="info pressure">
            <div class="info__title">Humidity</div>
            <div class="info__value">${data.main.humidity}%</div>
          </div>
          <div class="info visibility">
            <div class="info__title">Wind</div>
            <div class="info__value">${data.wind.speed}km/h</div>
          </div>
          <div class="info rain">
            <div class="info__title">Precipitation</div>
            <div class="info__value">10mm</div>
          </div>
        </div>
        <div class="c-weather__action">
            <button class="c-weather__action-button" id="location" onclick="locationdata()">
            ChangeLocation
            </button>
          </div>
      </section>
      </div>
  </div>` 
    document.getElementById("box").innerHTML=temp
}

const getdata=async(city)=>{
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=545bed40bbfcba2a3a54a0649a65a383&q=${city}&units=metric`)
    let data=await res.json()
    // console.log(data)
    showdata(data)
}  
const weatherdata=(e)=>{
    e.preventDefault()

    let city=document.getElementById("search").value
    getdata(city)

}
getdata("surat")
// document.getElementById("form").addEventListener("submit",weatherdata)

const newgetpositon=async(lat,long)=>{

    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=545bed40bbfcba2a3a54a0649a65a383&units=metric`)
   let data=await res.json()
    showdata(data)
}
const locationdata=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position)
        let lat=position.coords.latitude
        let long=position.coords.longitude
        newgetpositon(lat,long)
    })
}


