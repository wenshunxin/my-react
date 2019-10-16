/**
 * @Date:   2019-10-12T13:22:32+08:00
 * @Last modified time: 2019-10-14T14:11:07+08:00
 */
import React from "react";
import { Menu,Icon,Modal} from  "antd";
import ColorPicker from "../component/ColorPicker/index"
const createHistory =  require('history').createHashHistory;
const history = createHistory();
const { SubMenu } = Menu;
const { confirm } = Modal;
export default class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            color:"#fff"
        }
    }
    handleoutLogin(e){
       if(e.key === 'setting:1'){
           confirm({
               title:"提示",
               content:"确定退出？",
               okText: '确定',
               cancelText: '取消',
               onOk() {
                   history.push("/")
               }
           })
       }
    }
    /**
    * 切换主题
    */
   changeColor = (color) => {
       window.less.modifyVars({
           '@primary-color': color,
       }).then((res) => {
           console.log(res)
           // localStorage.setItem('user-theme', JSON.stringify({ '@primary-color': color }))
           this.setState({
               color
           })
       })
   }
    render(){
        return (
            <div className="rightWrap_header">
                {/**/}<ColorPicker color={this.state.color} onChange={this.changeColor} />
                <Menu mode="horizontal" onClick={(e)=>this.handleoutLogin(e)}>
                    <SubMenu  title={<span><Icon type="user" />{ this.state.username }</span>}>
                        <Menu.Item key="setting:1">退出</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
