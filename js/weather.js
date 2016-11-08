import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Info from '../components/Info'
import Edit from '../components/'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Weather}>
            <Route path="info" component={Info} />
            <Route path="edit" component={Edit} />
        </Route>
    </Router>


    ,document.getElementById('weather')
)
