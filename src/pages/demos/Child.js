import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentWillReceiveProps(newProps) {
        console.log('will receive', newProps)
    }

    shouldComponentUpdate() {
        console.log('should update')
        return true
    }

    componentWillUpdate() {
        console.log('will update')
    }

    componentDidUpdate() {
        console.log('did update')
    }

    render() {
        return <div>
            <p>{this.props.name}</p>
        </div>
    }
}