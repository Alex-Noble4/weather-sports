import React, { Component } from 'react'
import '../../Style/LightInformation.css'

export class LightInformation extends Component {
    render() {
        return (
            <div>
                <table className='li-table'>
                    <tr>
                        <td rowSpan='2'><img width="40px" src={'./assets/schedule.png'} alt='item-icon'/></td>
                        <td className='li-description'>FIRST LIGHT</td>
                        <td className='li-description'>LAST LIGHT</td>
                    </tr>
                    <tr>
                        <td className='li-value'>{this.props.data.first}</td>
                        <td className='li-value'>{this.props.data.last}</td>
                    </tr>
                </table>
            </div>
        )
    }
}