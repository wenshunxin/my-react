/**
 * @Date:   2019-10-15T16:06:48+08:00
 * @Last modified time: 2019-10-16T09:33:36+08:00
 */
import React from "react";
import { Row,Col ,Card} from "antd";
import Breadcrumb from "../../component/breadcrumb";
class BaseAnimation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isflag:false,
            index:-1
        }
    }
    animatedOne=i=>{
        this.setState({
            index:i
        })
    }
    animatedOneOver(){

    }
    render(){
        const animations = [
            'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
            'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
            'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
            'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
            'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
            'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
            'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
            'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
            'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
            'hinge', 'jackInTheBox', 'rollIn', 'rollOut','zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
            'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
            'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
        ];
        const { index } = this.state;
        return (
            <div>
                <Breadcrumb first={"动画"} second={"基础动画"}/>
                <Row gutter={16}>
                    {
                        animations.map((v,i)=>(
                            <Col className="gutter-row" md={6} key={i}>
                                <div className={`${index===i?'animated':''}  ${v} ${index===i?'infinite':''} `} style={{padding:"5px 0"}}
                                    onMouseEnter={() => this.animatedOne(i)}
                                    onMouseLeave={() => this.animatedOneOver()}
                                    >
                                    <Card hoverable={false}>{v}</Card>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}
export default BaseAnimation;
