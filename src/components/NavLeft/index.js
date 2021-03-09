import { Menu } from 'antd'
import React from 'react'
import MenuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
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
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }
    
    render() {
        return(
            <div>
                <div className="logo">
                    <img />
                    <h1>AZ bike</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}