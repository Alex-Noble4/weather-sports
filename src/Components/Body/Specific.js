import React, { Component } from 'react'
import { SpecificItem } from './SpecificItem'

import '../../Style/Specific.css'

export class Specific extends Component {
    render() {
        return (
            <div >
                <table className='sp-table'>
                    <tr align='center'>
                        <td><SpecificItem data={this.props.data} type='wind'></SpecificItem></td>
                        <td><SpecificItem data={this.props.data} type='humidity'></SpecificItem></td>
                        <td><SpecificItem data={this.props.data} type='clouds'></SpecificItem></td>
                    </tr>
                </table>
            </div>
        )
    }
}