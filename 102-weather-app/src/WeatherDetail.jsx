import React, {Component} from 'react'

class WeatherDetails extends Component{

    render(){

        const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`

        return(
            <div>
            <h4>{this.props.cityName} : {this.props.temp}</h4>
            <p>High: {this.props.high} - Low: { this.props.low}</p>
            <p>{this.props.weather} <img src={iconUrl} alt='icon'></img></p>
          </div>
        )
    }
}

export default WeatherDetails