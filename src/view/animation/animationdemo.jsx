/**
 * @Date:   2019-10-15T16:08:15+08:00
 * @Last modified time: 2019-10-16T10:30:15+08:00
 */
import React from "react";
import { Table,Button } from "antd";
import Breadcrumb from "../../component/breadcrumb";
import "./table.scss"
class AnimationDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            deleteIndex: -1,
            count:6,
            dataSource:[
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '3',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '4',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '5',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '6',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                }
            ],

            columns:[
                {
                    title:"序号",
                    key:"#",
                    width:80,
                    align:"center",
                    render:(text, record,index)=>(
                        <span>{index+1}</span>
                    )
                },
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title:"操作",
                    dataIndex:"",
                    render: (text, record,index) => (
                        <Button style={{margin:0}} className="table-btn" type="Link" onClick={()=>this.handleDel(record,index)}>删除</Button>
                    ),
                }
            ]
        };

    }
    handleDel=(record,index)=>{
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ deleteIndex: record.key });
        setTimeout(() => {
            this.setState({ dataSource });
        }, 500);
    }
    handleAdd=()=>{
        const { count , dataSource } = this.state;
        const dataOne = {
            key: count+1,
            name: '胡彦祖',
            age: 32,
            address: `西湖区湖底公园${count+1}号`,
        };
        dataSource.unshift(dataOne);
        this.setState({
            dataSource:[...dataSource],
            count:count+1
        })
    }
    render(){
        const { dataSource,columns } = this.state;
        return (
            <div >
                <Breadcrumb first={"动画"} second={"动画案例"} />
                <Button size="default" onClick={this.handleAdd}>添加</Button>
                <Table dataSource={dataSource} columns={columns} bordered style={{background:"#fff"}}  size="middle"
                    rowClassName={(record, index) => {
                        if(this.state.deleteIndex === record.key){
                            return 'animated zoomOutLeft min-black';
                        }
                        return 'animated fadeInRight';
                    }}
                />
            </div>
        )
    }
}
export default AnimationDemo;
