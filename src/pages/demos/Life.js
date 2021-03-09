import React from 'react'
import Child from './Child';
import './Life.less'
import {Button} from 'antd';

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div className="container">
            <p>React生命周期</p>
            <Button>点击</Button>
            <button onClick={this.handleAdd}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>;
    }
}