/**
 * @Date:   2019-10-16T10:31:40+08:00
 * @Last modified time: 2019-10-16T11:46:19+08:00
 */
import React from "react";
import Breadcrumb from "../../component/breadcrumb";
import Edemo1 from "./component/e-demo1";
import Edemo2 from "./component/e-demo2";
import Edemo3 from "./component/e-demo3";
import { Card ,Row,Col } from "antd";
class Echart extends React.Component{
    render(){
        return (
            <div>
                <Breadcrumb first={"图表"} second={"chart"}/>
                <Card title="区域图" bordered={false}>
                    <Edemo1 />
                </Card>
                <Row gutter={16} style={{marginTop:"15px"}}>
                    <Col span={12}>
                        <Card title='关系图' bordered={false}>
                            <Edemo2 />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='饼图' bordered={false}>
                            <Edemo3 />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Echart;
