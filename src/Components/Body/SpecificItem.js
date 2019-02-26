import React, { Component } from 'react'

import '../../Style/SpecificItem.css'

export class SpecificItem extends Component {

    getName(type) {
        if(type === 'wind') return "WIND";
        if(type === 'humidity') return "HUMIDITY";
        if(type === 'clouds') return "CLOUDS";
    }

    getLogoName(type) {
        if(type === 'wind') return "breeze.png";
        if(type === 'humidity') return "humidity.png";
        if(type === 'clouds') return "sun-partially-covered-by-a-cloud.png";
    }

    getValue(type, data) {
        if(type === 'wind') return data.wind + ' MPH';
        if(type === 'humidity') return data.humidity + '%';
        if(type === 'clouds') return data.clouds + '%';    
    }

    render() {
        return (
            <div >
                <table className='si-table'>
                    <tr><td><img width="32px" src={'./assets/'+this.getLogoName(this.props.type)} alt='item-icon'/></td></tr>
                    <tr><td className='si-type'>{this.getName(this.props.type)}</td></tr>
                    <tr><td className='si-divider'><div></div></td></tr>
                    <tr><td className='si-value'>{this.getValue(this.props.type, this.props.data)}</td></tr>
                </table>
            </div>
        )
    }
}