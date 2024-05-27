import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Table from "./Table";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Menu.Item key="1" icon={<UserOutlined />}>
            Главная
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Планирование
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Отчеты
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Настройки
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <Title level={3}>Планирование смен аутсорсинга - май 2024 г.</Title>
          <div>
            <span className="search">Найдено: 20 объектов</span>
            <Button iconPosition="end" type="text" icon={<FilterOutlined />}>
              Фильтры
            </Button>
            <Button>Действия</Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Title level={4}>Таблица смен</Title>
            <Table />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
