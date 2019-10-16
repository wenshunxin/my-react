/**
 * @Date:   2019-10-12T13:39:11+08:00
 * @Last modified time: 2019-10-15T14:03:55+08:00
 */
import React from "react";
import { Link } from 'react-router'
import { Menu, Icon,Switch } from 'antd';
import menu from "../assets/mock/menu"
const { SubMenu }  = Menu;

export default class Sider extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            current: this.props.path.split("/")[1],
            username: '',
            collapsed:false,
            theme:"light"
       };
    }
    onChange(checked){
       this.setState({
           theme :!checked?'light':"dark"
       })
    }
    render(){
        const { theme } = this.state;


        return(
            <div id="leftMenu" className={theme==='dark'?'dark':'light'}>
               <div className="leftMenu_header">
                    <img src={require("../assets/images/logo.png")} width="50" id="logo" title="" alt=""/>
               </div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 185 }}
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={[this.state.current]}
                    inlineCollapsed={this.state.collapsed}
                    theme={this.state.theme}
                    mode="inline"
                >
                    {
                        menu.map((item,index)=>{
                            if(item.children){
                                return (
                                    <SubMenu key={item.name} title={<span><Icon type={item.type} /><span>{item.title}</span></span>}>
                                        {
                                            item.children.map((it,k)=>{
                                                return (
                                                     <Menu.Item key={it.name}><Link to={it.path}>{it.title}</Link></Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }else{
                                return (
                                    <Menu.Item key={item.name}>
                                        <Icon type={item.type} />
                                        <Link to={item.path}>{item.title}</Link>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
               <div className='leftMenu_theme'>
                   <span><Icon type="bulb" size="14"/>切换主题 </span>
                   <Switch checkedChildren="暗" unCheckedChildren="明" onChange={(e)=>this.onChange(e)} />
               </div>
            </div>
        )
    }
}
//注意object大小写
Sider.contextTypes= {
    router: React.PropTypes.object.isRequired
}
