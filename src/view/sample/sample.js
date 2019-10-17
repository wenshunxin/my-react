/**
 * @Date:   2019-10-09T10:11:33+08:00
 * @Last modified time: 2019-10-17T15:07:02+08:00
 */



import React from "react";
import Child from "./component/child"
import { Card } from "antd";
export default class Sample extends React.Component{
    state={
        name:"我是父组件传给子组件的",
        childName:""
    }
    componentDidMount(){

    }
    handleFather=name=>{
        this.setState({
            childName:name
        })
    }
    render(){
        return(
            <div>
                我是父组件我是作品集
                <Card>{this.state.childName}</Card>
                <Child child={this.state.name} onChangeChild={this.handleFather}/>
            </div>
        )
    }
}
