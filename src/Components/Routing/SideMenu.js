import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, UsergroupAddOutlined, CheckCircleOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Routing from './Routing';
import { isLogedIn } from '../ReusableComponents/CoomonFunctions/CommonFunctions';

const { Sider, Content } = Layout;

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { path: '/home', label: 'Home', icon: <HomeOutlined /> },
        {
            path: '/preference',
            label: 'Preference',
            icon: <UserOutlined />,
            children: [
                { path: '/classes', label: 'Classes', icon: <UsergroupAddOutlined /> },
                { path: '/qualifications', label: 'Qualifications', icon: <CheckCircleOutlined  /> },
            ],
        },
    ];

    const renderSubMenu = (subMenu,parentPath) => (
        <Menu.SubMenu key={subMenu.path} icon={subMenu.icon} title={subMenu.label}>
          {subMenu.children.map((item) => {
            const fullPath = `${parentPath}${item.path}`;
            if (item.children && item.children.length > 0) {
              return renderSubMenu(item,fullPath);
            } else {
              return (
                <Menu.Item key={item.path} icon={item.icon}>
                  <Link to={fullPath}>{item.label}</Link>
                </Menu.Item>
              );
            }
          })}
        </Menu.SubMenu>
    );

    return (
        <div>
            {isLogedIn() ? (
                <Layout
                    style={{
                        minHeight: '100vh',
                    }}
                >
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline">
                            {menuItems.map((menuItem) =>
                                menuItem.children && menuItem.children.length > 0
                                    ? renderSubMenu(menuItem,menuItem.path)
                                    : (
                                        <Menu.Item key={menuItem.path} icon={menuItem.icon}>
                                            <Link to={menuItem.path}>{menuItem.label}</Link>
                                        </Menu.Item>
                                    )
                            )}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <Routing />
                        </Content>
                    </Layout>
                </Layout>
            ) : (
                <Routing />
            )}
        </div>
    );
};

export default SideMenu;
