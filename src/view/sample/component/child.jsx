/**
 * @Date:   2019-10-17T14:56:32+08:00
 * @Last modified time: 2019-10-17T15:12:34+08:00
 */
import React from "react";
import { Card,Button } from "antd";
class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:1
        }
    }
    handleAdd=()=>{
        const { onChangeChild } = this.props;
        const { num } = this.state;
        this.setState({
            num:num+1
        })
        onChangeChild("我是子组件传过来的"+num);
    }
    render(){
        return (
            <div>
                <Card>
                    {this.props.child}
                </Card>
                我是子组件
                <Button onClick={this.handleAdd}>按钮</Button>
            </div>
        )
    }
}
export default Child;
