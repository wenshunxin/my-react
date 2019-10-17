/**
 * @Date:   2019-09-27T16:57:01+08:00
 * @Last modified time: 2019-10-17T14:54:38+08:00
 */
import React from "react";
import { Tabs } from "antd";
const createHistory =  require('history').createHashHistory;
const { TabPane } = Tabs;
const history = createHistory()
class Fetch extends React.Component{
    callback(tab){
        history.push(`/sub2/${tab}`)
    }
    render(){
        return (
            <div>
                <Tabs defaultActiveKey="tab1" onChange={(tab)=>this.callback(tab)}>
                    <TabPane tab="Tab 1" key="tab1"></TabPane>
                    <TabPane tab="Tab 2" key="tab2"></TabPane>
                    <TabPane tab="Tab 3" key="tab3"></TabPane>
                </Tabs>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Fetch;
