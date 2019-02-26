import React, { Component } from 'react'

import '../../Style/Altitude.css'

export class Altitude extends Component {
    render() {
        return (
            <div >
                <table className='alt-table'>
                    <tr>
                        <td rowSpan='2'>
                            <img width="40x" src={'./assets/mountains.png'} alt='altitude-icon'/>
                        </td>
                        <td className='alt-info alt-info-top'>
                            <span>YOUR ALTITUDE</span>
                        </td>
                        <td className='alt-meters' rowSpan='2'>
                            <span>{this.props.data.altitude} M</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='alt-info alt-info-bottom'>
                            <span>SEA LEVEL</span>
                        </td>
                    </tr>
                    
                </table>
            </div>
        )
    }
}