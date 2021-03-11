import { Menu } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig'
import { connect } from 'react-redux';
import { switchMenu } from './../../redux/actions'
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
        currentKey: ''
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu(data) {
        return data.map(item => {
            if(item.children && item.children.length) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>
                {item.title}
                </NavLink>
            </Menu.Item>
        })
    }

    handleClick = (item) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.item.props.title))
        this.setState({
            currentKey: item.key
        });
    }
    
    render() {
        return(
            <div>
                <div className="logo">
                    <img />
                    <h1>AZ bike</h1>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={this.state.currentKey} theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft);