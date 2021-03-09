import { Col, Row } from 'antd'
import React from 'react'
import './index.less'
import Util from '../../utils/utils'

export default class Header extends React.Component {
    state = {}
    componentWillMount() {
        this.setState({
            username: '小赵'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎， {this.state.username}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrum-title">首页</Col>
                    <Col span="20" className="wheather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="wheather-detail">阴天</span>
                    </Col>
                </Row>
            </div>
        )
    }
}