import React, { Component } from 'react'

const ErrorComponent = () => <div>{ignore}</div>

class Counter extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props)
        this.state = {
            counter: 0,
            seed: 0,
            initializing: true,
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
        //initial requests, fetch data, network calls etc useful here
        console.log('Component Did Mount')
        setTimeout(() => {
            this.setState({initializing: false})
        }, 500);
        console.log('-------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should Component Update - DO NOT RENDER')
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //listviews, DOM etc pass to componentDidUpdate before updating
        console.log('Get Snapshot Before Update')
        return null
    }


    render() {
        console.log('Render')

        if(this.props.showErroComponent && this.state.error) {
            return <div>We have encountered an error! {this.state.error.message}</div>
        }

        if(this.state.initializing) {
            return <div>Initializing...</div>
        }

        if(this.props.showErrorComponent && this.state.error) {
            return <div>We have encountered an error! {this.state.error.message}</div>
        }

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                {this.props.showErrorComponent ? <ErrorComponent /> : null}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update')
        console.log('--------------------')
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
        console.log('----------------------')
    }

    componentDidCatch(error, info) {
        console.log('Component Did Catch')

        this.setState({error, info})
    }

}

export default Counter