/**
 * @Date:   2019-09-27T17:41:11+08:00
 * @Last modified time: 2019-10-15T14:01:42+08:00
 */
 import React from "react"
 import {Table,Button,Form,Switch,Popconfirm,Modal} from 'antd'
 import TypingCard from '../typingCard/index'
 export default class MyTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tDate:[],
            bordered:true,
            visible:false
        }

    }

    componentDidMount(){
        const data = []

        for (let i = 0; i < 50; i++) {
            data.push({
                key: i,
                name: `Mr劳卜${i}`,
                age: 18,
                address: `西湖区湖底公园${i}号`,
                remark: 'http://www.cnblogs.com/luozhihao/',
                operate: '暂无'
            })
        }

        this.setState({
            tDate: data
        })
    }
    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    }
    // 修改行数据
    handleModle=text=>{
        console.log(text)
        this.setState({
            visible:!this.state.visible
        })
    }
    handleOk = e => {
        this.setState({
            visible: false,
        });
    }
    // 删除行数据
    handleDelete = key => {
        this.state.tDate.splice(key-1,1);
        this.setState({
            tDate: this.state.tDate
        })
    }
    render(){
        const self = this;
        const { state } = this;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(selectedRowKeys);
                console.log(selectedRows)
            }
        };
        const columns = [
            {
                title: '姓名',
                width: '20%',
                dataIndex: 'name'
            },
            {
                title:"年龄",
                width:"20%",
                dataIndex:"age"
            },
            {
                title:"住址",
                width:"20%",
                dataIndex:"address"
            },
            {
                title:"备注",
                width:"20%",
                dataIndex:"remark",
                render(text) {
                    return (<a href={text} target={'_blank'}>博客园</a>)
                }
            },
            {
                title:"操作",
                width:"20%",
                render(text, record){
                    return (
                        <div>
                            <Button type="link" onClick={()=>self.handleModle(text)}>修改</Button>
                            <Popconfirm title="确定删除?" cancelText="取消" okText="确定" onConfirm={() => self.handleDelete(record.key)}>
                                <Button type="link">删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ];
        const pagination = {
            total: this.state.tDate.length,
            pageSize:10,
            defaultCurrent:2,
            size:"middle"
        }

        return (
            <div>
                <TypingCard source='页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。'/>
                <Modal
                  title="Basic Modal"
                  visible={state.visible}
                  onOk={self.handleOk}
                  onCancel={()=>{self.setState({visible:false})}}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Form layout="inline">
                    <Form.Item label="边框">
                        <Switch defaultChecked checked={state.bordered} onChange={this.handleToggle('bordered')}/>
                    </Form.Item>
                    <Form.Item label="loading">
                        <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                    </Form.Item>
                </Form>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={state.tDate}
                    {...state}
                    pagination={pagination}
                    size="middle"
                    />
            </div>

        )
    }
 }
