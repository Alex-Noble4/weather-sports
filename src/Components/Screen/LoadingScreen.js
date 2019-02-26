import React, { Component } from 'react'

import '../../Style/Ripple.css'

// Credits for the graphics go to: https://loading.io/css/
export class LoadingScreen extends Component {

    render() {
        return (
            <div class="lds-ripple"><div></div><div></div></div>
        )
    }
}