import React from 'react'
//引入组件
import { TabBar } from 'antd-mobile';
//导入自己的样式
import './index.css'
import {Route} from 'react-router-dom'
import Index from '../Index'
import HouseList from '../HouseList'
import Profile from '../Profile'
import News from '../News'
export default class Home extends React.Component{

    state = {
        selectedTab: this.props.location.pathname
      };

     
    render (){
      console.log(this.props.location.pathname)
        return <div className='home'>
          {/* 引入路由 */}
          <Route path='/home/index' component={Index}/>
          <Route path='/home/list' component={HouseList}/>
          <Route path='/home/news' component={News}/>
          <Route path='/home/profile' component={Profile}/>

        {/* TabBar的标签的引入 */}
        <TabBar
          tintColor="#21b97a"
          barTintColor="white"
          noRenderContent={true}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>
            }
            selected={this.state.selectedTab === '/home/index'}

            onPress={() => {
              this.setState({
                selectedTab: '/home/index',
              });
              this.props.history.push('/home/index');
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            
            selectedIcon={
                <i className="iconfont icon-findHouse"></i>
            }
            title="找房"
            key="Koubei"
            icon={<i className="iconfont icon-findHouse"></i>}

            selected={this.state.selectedTab === '/home/list'}
            onPress={() => {
              this.setState({
                selectedTab:'/home/list',
              });
              this.props.history.push('/home/list');

            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
          icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={
                <i className="iconfont icon-infom"></i>
            }
            title="资讯"
            key="Friend"

            selected={this.state.selectedTab === '/home/news'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/news',
              });
              this.props.history.push('/home/news');

            }}
          >

          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/home/profile'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/profile',
              });
              this.props.history.push('/home/profile');

            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>

    
    }
}