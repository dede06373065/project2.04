import React, {Component} from 'react'
import './weather.css'
import PropTypes from 'prop-types'
export default class Content extends Component{
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state={
        cityName:'France'
    }


    render(){
        //check whether the props has already sent or not
        const city=this.props.searchName
        console.log(city)
        
        return(
            <div className="content">
                <div className="content__top">
                        <div className="content__top__details">
                            <div className="degree">12 ℃ </div>
                            <h3>☁️cloudy</h3>
                            <ul className="otherdetails">
                                <li>
                                    <h4>Humidity</h4>4%
                    </li>
                                <li className="border">
                                    <h4>Wind</h4>12km/h
                    </li>
                            </ul>
                        </div>
                        <div className="content__top__location">{city?city:this.state.cityName}</div>
                    </div>
                    <div className="content__ground">
                        <ul className="row">
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>🌞</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>☁️</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>☔️</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>❄️</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>🧊</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}