/**
 * @Date:   2019-09-30T10:59:44+08:00
 * @Last modified time: 2019-09-30T11:10:34+08:00
 */
import React from "react";
import { Calendar } from "antd";
export default class myCalendar extends React.Component{
    constructor(props){
        super(props);
        this.onPanelChange = this.onPanelChange.bind(this);
    }
    onPanelChange(value, mode){
        console.log(value, mode)
    }
    render(){
        return(
            <Calendar onPanelChange={this.onPanelChange} />
        )
    }
}
