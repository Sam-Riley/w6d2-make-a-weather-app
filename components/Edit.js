import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'

import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this) //replaces the above method with Colin's node_module AutoBind
        this.state = sharedState()
}
    componentDidMount() {
            attachSharedState(this)
}
    componentWillUnmount() {
            detachSharedState(this)
}


    updatePageText(e) {
        sharedState({
            pageText: e.target.value
        })
}
    render() {
        return <div>
        <h1>Editor View</h1>
        <textarea className="form-control" onChange={this.updatePageText}>{this.state.pageText}</textarea>
        <p>{this.state.pageText}</p>
        </div>
}
}

export default Edit
