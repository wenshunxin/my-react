/**
 * @Date:   2019-10-08T10:11:06+08:00
 * @Last modified time: 2019-10-08T13:03:02+08:00
 */



import React from "react";
import "./login.css";
import FormLogin from "./form"
export default class Login extends React.Component{
    render(){
        return (
            <div id="login">
                <div className="login_header">
                    <img  width="40" src="https://antd-admin.zuiidea.com/logo.svg" title="" alt=""/>
                    <span>antd admin </span>
                </div>
                <FormLogin />
            </div>
        )
    }
}
