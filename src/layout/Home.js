/**
 * @Date:   2019-09-27T17:55:28+08:00
 * @Last modified time: 2019-10-14T16:00:11+08:00
 */
 // 配置导航
import React from "react";
import "./sider.scss";
import Header from "./header";
import Sider from "./sider";
export default class Home extends React.Component {
     render() {

         return (
             <div>
                <Sider path={this.props.location.pathname}/>
                 <div id="rightWrap">
                    <Header/>
                     <div className="right-box">
                        <div className="right-box-con">
                            { this.props.children }
                        </div>
                     </div>
                 </div>
             </div>
         )
     }
 }
