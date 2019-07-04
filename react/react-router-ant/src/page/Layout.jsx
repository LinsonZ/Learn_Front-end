import React from 'react';
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd'
import {Link, Route} from 'react-router-dom'
import Table from './table/index'
const {Header, Footer, Sider, Content } = Layout

// function Table () {
//   return (
//     <div>table</div>
//   )
// }
function Label () {
  return (
    <div>label</div>
  )
}
function Post (props) {
  console.log(props)
  const { match } = props
  return (
    <div>
      id: {match.params.id}
    </div>
  )
}
function DropMenu () {
  return (
    <Menu>
      <Menu.Item>
        <a href="">1</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">2</a>
      </Menu.Item>
    </Menu>
  )
}

class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
          <Row>
            <Col span={10}>
              React + Antd 实践
            </Col>
            <Col span={8}>
              <Input placeholder="请输入...."></Input>
            </Col>
            <Col span={6}>
              <Avatar style={{backgroundColor: '#666', marginRight:20}} icon="user"></Avatar>
              <Dropdown overlay={DropMenu}>
                <span>Hi, 
                  <Icon type="down"></Icon>
                </span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <Menu style={{width: 256, height: '90vh', overflow: 'auto' , minWidth: 256}}
            defaultOpenKeys={['sub1']} mode="inline">
              <Menu.SubMenu key="sub1" title={<span><Icon type="smile-0" ></Icon>部分ui组件实战</span>}>
                <Menu.Item key="sub1-1">
                  <Link to={{pathname: '/table', search: '?type=all&a=1'}}>表格</Link>
                </Menu.Item>
                <Menu.Item key="sub1-2">
                  <Link to={"/label"}>标签页</Link>
                </Menu.Item>
                <Menu.Item key="sub1-3">
                  <Link to={"/post/abcdefg"}>文章详情</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content style={{marginLeft: '15%'}}>
            {/* { this.props.children } */}
            <Route path="/table" component={Table}></Route>
            <Route path="/label" component={Label}></Route>
            <Route path="/post/:id" component={Post}></Route>
          </Content>  
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
export default PageLayout