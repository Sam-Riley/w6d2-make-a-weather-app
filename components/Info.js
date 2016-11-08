import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Info extends React.Component {
    constructor(props){
        super(props)
        this.state = sharedState()
}
componentDidMount() {
    attachSharedState(this)
}

componentWillMount() {
    detachSharedState(this)
}
render() {
    return <div className=".col-md-6 .col-md-offset-3 text text-center">
    <h4>Indianapolis, IN</h4>
    <h5>Date and Time</h5>
    <h5>Temp Monday</h5>
    <h5>Temp Tuesday</h5>
    <h5>Temp Wednesday</h5>
    <h5>Temp Thursday</h5>
    <h5>Temp Friday</h5>

    </div>
}

}

export default Info
