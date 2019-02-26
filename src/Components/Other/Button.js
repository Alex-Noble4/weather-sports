import React, { Component } from 'react'

import '../../Style/Button.css'

export class Button extends Component {
    render() {
        return (
            <div >
                <button className='button' onClick={this.props.action}>{this.props.text}</button>
            </div>
        )
    }
}