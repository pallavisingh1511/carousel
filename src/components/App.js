import React, { Component } from 'react'
import Login from './login'
import style from './../style.less'
import Carousel from './carousel'

class App extends Component {
    render() {
        return(
            <div className={ style.container }>
                <div className={ style.pageWrapper }>
                    <div className={ style.page }>
                        <Login />
                        {/* <Carousel user="Pallavi" /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default App