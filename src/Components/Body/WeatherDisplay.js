import React, { Component } from 'react'

import '../../Style/WeatherDisplay.css'


import { HeaderDisplay } from '../Header/HeaderDisplay'

import { Temperature } from './Temperature'
import { Information } from './Information'
import { Altitude } from './Altitude'
import { Specific } from './Specific'
import { LightInformation } from './LightInformation'

import { Button } from '../Other/Button'


export class WeatherDisplay extends Component {

    render() {
        return (
            <div className='weather-div'>
                <HeaderDisplay></HeaderDisplay>
                <table className='weather-table' >
                    <tr align='center'>
                        <td><Temperature data={this.props.state.weather}></Temperature></td>
                    </tr>
                    <tr align='center'>
                        <td><Information data={this.props.state.location}></Information></td>
                    </tr>
                    <tr align='center' className='big-space'>
                        <td><Altitude data={this.props.state.location}></Altitude></td>
                    </tr>
                    <tr align='center'>
                        <td><Specific data={this.props.state.weather}></Specific></td>
                    </tr>
                    <tr align='center'>
                        <td><LightInformation data={this.props.state.daylight}></LightInformation></td>
                    </tr>

                    <tr align='center' className='stick-to-bottom'>
                        <td><Button text="CHANGE LOCATION" action={this.props.changeLocationAction}></Button></td>
                    </tr>

                </table>
            </div>
        )
    }
}