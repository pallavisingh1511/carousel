import React, { Component } from 'react'
import Login from './login'
import style from './../style.less'

class App extends Component {
    render() {
        return(
            <div className={ style.container }>
                <Login />
            </div>
        )
    }
}

export default App