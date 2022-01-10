import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment = () => this.setState({ counter: this.state.counter + 1})
    decrement = () => this.setState({ counter: this.state.counter - 1})

    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        console.log('Component Did Mount')
        console.log('-------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should Component Update - DO NOT RENDER')
            return false
        }
        return true
    }


    render() {
        console.log('Render')

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update')
        console.log('--------------------')
    }

    componentWillUnmount() {
        console.log('Componetn Will Unmount')
        console.log('----------------------')
    }

}

export default Counter