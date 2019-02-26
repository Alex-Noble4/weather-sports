import React, { Component } from 'react'
import '../../Style/Temperature.css'

export class Temperature extends Component {
    render() {
        return (
            <div className='temp'>
                <table>
                    <tr className='temp-icon'>
                        <img width="64px" src={'./assets/sun-partially-covered-by-a-cloud.png'} alt='weather-icon'/>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='temp-celcius-symbol'>
                            <span>o</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='temp-number'>
                            <h1>
                                {this.props.data.temperature}
                            </h1>
                        </td>
                        <td className='temp-celcius-letter'>
                            <span> 
                                C
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}