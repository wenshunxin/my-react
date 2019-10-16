/**
 * @Date:   2019-09-27T17:19:56+08:00
 * @Last modified time: 2019-10-12T17:16:12+08:00
 */
import React from 'react'
 // 结尾组件

 export default class myAnimate extends React.Component {
     constructor(props) {
         super(props);
         this.state={}
     }
     render() {
         return (
             <div className="ani-box">
                 <img src={require("../assets/images/face.jpg")} width="100" title="" alt="" className="animated fadeInUp lastPic" />
                 <span className="animated flipInX ege">我的头像</span>
             </div>
         )
    }
 }
