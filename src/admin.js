import { Col, Row } from 'antd';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col span="3">
                    <NavLeft></NavLeft>
                </Col>
                <Col span="21">
                    <Header></Header>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}