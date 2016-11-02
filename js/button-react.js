import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.addCounter = this.addCounter.bind(this)
        this.state = {
            counter: 0,
            shouldAdd: 0
        }
    }
    addCounter() {
        var updatedCounter = this.state.counter
        updatedCounter++

        this.setState({
            counter: updatedCounter
        })
    }
    render() {
    var lis = []
//Setting a scoped array for the new lis items

    for (let i = 0; i < this.state.counter; i++) {
        lis.push(<li className="list-group-item">{i + this.state.shouldAdd}</li>)
    }
//Creating a loop that sets i to 0. Every click pushes an i onto lis array

    return <div>
    <button type="button" className="btn btn-danger btn-block" onClick={this.addCounter}>Click Me!</button>

    <button type="button" className="btn btn-danger btn-block" onClick={()=>this.setState({shouldAdd:1})}>Add 1</button>

    <ul className="list-group">
        {lis}
    </ul>
    </div>
}


}

ReactDOM.render(<Button />, document.getElementById('react'))
