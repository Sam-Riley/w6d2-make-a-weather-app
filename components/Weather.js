import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'



class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=indianapolis,us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
        .then(response => response.json())
        .then((weatherGet)=>{
            this.setState({
                location:weatherGet.name,
                temp:Math.round(weatherGet.main.temp),
                condition:weatherGet.weather[0].main,
            })
            console.log(weatherGet)
        })

    }
    render() {
        var date = moment().format('MMMM do YYYY, h:mm:ss a')
        return <div>

        <h1 className="text-center">Indianapolis</h1>

        <div className=".col-md-6 .col-md-offset-3 text text-center">

             <h4>{this.state.location}</h4>
             <h5>{date}</h5>
             <h1>{this.state.temp} &#x2109;</h1>
             <h3>{this.state.condition}</h3>

         </div>


        </div>
    }
}

export default Weather
