import { useState } from "react"
import axios from "axios"

function Weather1()
{
    const [input,setinput] = useState("")
    const [weather,setweather] = useState("")
    const [temperature,settemperature] = useState("")
    const [description,setdescription] = useState("")  

    function handleInput(event)
    {
        setinput(event.target.value)
    }

    function handleUpdate()
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=aca7ab13cc7543a4341fb161f26b2819`)

        weatherData.then(function(Success){
            console.log(Success.data)
            setweather(Success.data.weather[0].main)
            settemperature(Success.data.main.temp)
            setdescription(Success.data.weather[0].description)
        })


    }
    return(
        <div className=" bg-black p-20">
            <div className=" bg-green-400 p-10 rounded-md">
                <h1 className=" text-2xl font-bold">Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input type="text" onChange={handleInput} className="p-1 mt-2 border border-black rounded-md outline-none"  placeholder="Enter your City Name"/><br />
                <button onClick={handleUpdate} className=" bg-black text-white mt-2 p-1 rounded-md font-semibold">Get Report</button>

                <div className="mt-5">
                    <p><b>Weather:</b>{weather}</p>
                    <p><b>Temperature:</b>{temperature}</p>
                    <p><b>Description:</b>{description}</p>
                </div>

            </div>

        </div>
    )
}
export default Weather1