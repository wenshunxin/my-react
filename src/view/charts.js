/**
 * @Date:   2019-09-29T14:38:34+08:00
 * @Last modified time: 2019-10-12T11:07:40+08:00
 */
import React from "react";
import G2 from '@antv/g2';
import { Row, Col,Card } from 'antd';
export default class Chart extends React.Component{
    componentDidMount(){
        var data = [{
            year: '1991',
            value: 3
          }, {
            year: '1992',
            value: 4
          }, {
            year: '1993',
            value: 3.5
          }, {
            year: '1994',
            value: 5
          }, {
            year: '1995',
            value: 4.9
          }, {
            year: '1996',
            value: 6
          }, {
            year: '1997',
            value: 7
          }, {
            year: '1998',
            value: 9
          }, {
            year: '1999',
            value: 13
          }];
        // Step 1: 创建 Chart 对象
        const chart = new G2.Chart({
          container: 'c1', // 指定图表容器 ID
          forceFit: true,// 指定图表宽度
          height : 300 // 指定图表高度
        });
        // Step 2: 载入数据源
        chart.source(data);
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.line().position('year*value')
        // Step 4: 渲染图表
        chart.render();
    }
    render(){
        const style = {
            width:"100%"
        }
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <Card>
                             <div id="c1" style={style}></div>
                        </Card>

                    </Col>
                </Row>
            </div>

        )
    }
}
