import React from 'react'
import { Link } from 'react-router'

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
        <h1>Navigation</h1>
        <Link to="/">
        <button type="button" className="btn btn-default">Home</button>
        </Link>

        <Link to="/info">
        <button type="button" className="btn btn-default">Info</button>
        </Link>

        <Link to="/edit">
        <button type="button" className="btn btn-default">Edit</button>
        </Link>

        <div className="panel panel-default">
            <div className="panel-body">
                {this.props.children}
            </div>
        </div>

        </div>
    }
}

export default Weather
