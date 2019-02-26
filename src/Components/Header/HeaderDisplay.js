import React, { Component } from 'react'

import '../../Style/HeaderDisplay.css'

export class HeaderDisplay extends Component {
    render() { 
        return (
            <table className='header-table'>
                <tr>
                    <td className='header-menu-icon'><img src={'./assets/baseline-reorder.svg'} alt='menu'/></td>
                    <td className='header-date'><img className='header-date-icon' width='10px' src={'./assets/keyboard-left-arrow-button.png'} alt='left'/> TODAY <img width='10px' className='header-date-icon' src={'./assets/keyboard-right-arrow-button.png'} alt='right'/></td>
                    <td className='header-time'>10:34 AM</td>
                </tr>
            </table>
        )
    }
}