import {useState} from "react";
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import './style.less'

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('项目管理', '1',<PieChartOutlined />),
    getItem('成员管理','2',<DesktopOutlined />),
]
const GeekLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: '项目管理',
                            },
                            {
                                title: '接口管理',
                            },
                        ]}
                    />
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default observer(GeekLayout)