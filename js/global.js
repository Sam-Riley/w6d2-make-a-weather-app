import { Router, Route, Link, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import Weather from '../components/Weather'

import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

// window.pageText = []

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={Weather}>
            {/* <Route path="/forecast" component={Forecast} /> */}
        </Route>
    </Router>

    , document.getElementById('cms')
)
