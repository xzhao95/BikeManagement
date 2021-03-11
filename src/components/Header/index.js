import { Col, Row } from 'antd'
import React from 'react'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import { connect } from 'react-redux'
class Header extends React.Component {
    state = {}
    componentWillMount() {
        this.setState({
            username: '小赵'
        })
        this.getTime();
        this.timeId = setInterval(this.getTime, 1000);
        this.getWeatherApiData();
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    getTime = () => {
        let sysTime = Util.formateDate(new Date().getTime());
        this.setState({
            sysTime
        })
    }
    getWeatherApiData() {
        // 百度api目前不支持被浏览器调用
        // let city = '222405'
        // axios.jsonp({
        //     url: 'http://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&output=JSON&ak=RkOMm7wTqRgMdcgGP0fzDuARtk7DknugG'
        // }).then(res => {
        //     // this.setState({
        //     //     weather: res.result.now.text
        //     // })
        // })
        this.setState({
            weather: '晴转多云'
        })
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
                    <Col span="4" className="breadcrumb-title">{this.props.menuName}</Col>
                    <Col span="20" className="wheather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="wheather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
}
export default connect(mapStateToProps)(Header)