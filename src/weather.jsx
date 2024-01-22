import { useState } from "react"
import axios from "axios"

function Weather()
{
    const [city,setcity] = useState("")

    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(event)
    {
        setcity(event.target.value)
    }

    function getWeather()
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aca7ab13cc7543a4341fb161f26b2819`)

        weatherData.then(function(Success){
            console.log(Success.data)
            setweather(Success.data.weather[0].main)
            settemp(Success.data.main.temp)
            setdesc(Success.data.weather[0].description)
        })
    }
    return(
        <div className=" bg-black p-20">
            <div className=" bg-green-400 p-10 rounded-md">
                <h1 className=" text-2xl font-semibold">Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className=" mt-2 border border-black rounded-md outline-none p-1" placeholder="Enter Your City Name" /> <br />
                <button onClick={getWeather} className=" bg-black text-white font-semibold p-2 rounded-md mt-2">Get Report</button>

                <div className=" mt-2">
                    <h1><b>Weather:</b>{weather}</h1>
                    <p><b>Temperature:</b>{temp}</p>
                    <p><b>Description:</b>{desc}</p>
                </div>

            </div>

        </div>
    )
}
