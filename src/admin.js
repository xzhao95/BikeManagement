import { Col, Row } from 'antd';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home';
import './style/common.less'

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span="21" className="main">
                    <Header></Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}