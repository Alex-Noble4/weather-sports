import React, { Component } from 'react'

import '../../Style/Information.css'

export class Information extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td className='info-center-td'>
                            <span className='info-location'>{this.props.data.city}</span>
                            <div className='info-location-seperator'></div>
                        </td>
                    </tr>
                    <tr>
                        <td className='info-center-td'>
                            <span className='info-date'>{this.props.data.date}</span>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}