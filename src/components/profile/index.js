import React, { Component, Fragment } from 'react'

class Profile extends Component {
    
    render() {
        const { user } = this.props
        return(
            <div >
                Welcome { user }!
            </div>
        )
    }
}

export default Profile