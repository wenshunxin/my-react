/**
 * @Date:   2019-09-27T16:30:33+08:00
 * @Last modified time: 2019-10-15T16:15:19+08:00
 */
import React from 'react';
import ReactDOM from 'react-dom';
// 引入React-Router模块
import { Router, Route, IndexRoute,hashHistory} from 'react-router'
import { Switch } from "react-router-dom";
// 引入Ant-Design样式 & Animate.CSS样式
import "./assets/css/animate.css";
import "./app.css"
import myHome from "./layout/Home"
import component from "./export";

import Tab1 from "./view/fetch/tab1";
import Tab2 from "./view/fetch/tab2";
import Tab3 from "./view/fetch/tab3";
import Button from "./view/basecomponent/button"
import Index from "./layout/index"
// 动画组件
import Baseanimation from "./view/animation/baseanimation";
import Animationdemo from "./view/animation/animationdemo";


import Login from "./login/login"
import Sample from "./view/sample/sample"
console.log()
ReactDOM.render(
    (
        <Router history={hashHistory}>
            {/* switch 的使用是为了防止组价的重复调用 */}
            <Switch>
                <Route path="/" component={Login}></Route>
                <Route path="/home" component={myHome} >
                    <IndexRoute  component={Index} />
                    <Route path="/btn" component={Button}/>
                    <Route path="/myAnimate" component={component.myAnimate} />
                    <Route path="/myTable" component={component.MyTable} />
                    <Route path="/myCard" component={component.myCard} >
                        <IndexRoute component={Tab2}/>
                        <Route path='/tab1' component={Tab1}/>
                        <Route path='/tab2' component={Tab2}/>
                        <Route path='/tab3' component={Tab3}/>
                    </Route>
                    <Route path="/myCharts" component={component.MyCharts} />
                    <Route path="/myCalendar" component={component.myCalendar} />
                    <Router path="/sample" component={Sample} />
                    <Route path="/bat" component={Baseanimation} />
                    <Route path="/atdemo" component={Animationdemo}/>
                </Route>
            </Switch>
        </Router>
    ),
    document.getElementById("root")
)
