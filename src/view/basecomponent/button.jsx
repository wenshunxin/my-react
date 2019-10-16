/**
 * @Date:   2019-10-14T14:50:14+08:00
 * @Last modified time: 2019-10-15T13:51:49+08:00
 */



import React from "react";
import BreadcrumbCustom from "../../component/breadcrumb";
import TypingCard from "../typingCard/index";
import { Row ,Col ,Card,Button,Radio  } from 'antd';
import "./base.scss"
function BaseBtn(){
    return (
        <div id="btn">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>
        </div>
    )
}


class HandleBtn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            size:"default"
        }
    }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    }
    render(){
        const { size } = this.state;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br/>
                <Button type="primary" size={size}>
                  Primary
                </Button>
                <Button size={size}>Normal</Button>
                <Button type="dashed" size={size}>
                  Dashed
                </Button>
                <Button type="danger" size={size}>
                  Danger
                </Button>
                <Button type="link" size={size}>
                  Link
                </Button>
                <br />
            </div>



        )
    }
}

export default class ButtonTx extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={24} >
                        <BreadcrumbCustom  first={'基础组件'} second={"按钮"}/>
                        <TypingCard source="标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。" title={"按钮"}/>
                    </Col>
                </Row>
                <Row gutter={16} className="gutter-example" style={{"marginTop":"20px"}}>
                    <Col span={12}>
                        <Card  bordered={false}>
                            <BaseBtn />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card  bordered={false}>
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" shape="circle">
                              A
                            </Button>
                            <Button type="primary" icon="search">
                              Search
                            </Button>
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <br />
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <Button type="dashed" shape="circle" icon="search" />
                            <Button type="dashed" icon="search">
                              Search
                            </Button>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card  bordered={false}>
                            <HandleBtn />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
