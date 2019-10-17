/**
 * @Date:   2019-10-17T13:19:24+08:00
 * @Last modified time: 2019-10-17T14:35:10+08:00
 */
import React from "react";
import Shuffle from 'shufflejs';
import Breadcrumb from "../../component/breadcrumb";
import { Card,Button } from "antd";

class GalleryDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image:"",
            visible:false,
            photos:[
                {
                    groups:['nature'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/01.jpeg')
                },
                {
                    groups:['other'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/02.jpeg')
                },
                {
                    groups:['nature'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/03.jpeg')
                },
                {
                    groups:['nature'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/04.jpeg')
                },
                {
                    groups:['other'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/05.jpeg')
                },
                {
                    groups:['nature'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/06.jpeg')
                },
                {
                    groups:['nature'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/07.jpeg')
                },
                {
                    groups:['other'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/08.jpeg')
                },{
                    groups:['scenery'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/09.jpeg')
                },
                {
                    groups:['nature'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/10.jpeg')
                },{
                    groups:['scenery'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/11.jpeg')
                },
                {
                    groups:['scenery'],
                    style:'itemOne',
                    size:'1x1',
                    src:require('../../assets/images/12.jpeg')
                }
            ]
        }
    }

    componentDidMount(){
        this.shuffle = new Shuffle(this.shuffleDemo, {
            itemSelector: '.photo-item',
            sizer: this.sizer,
        });
    }
    render(){
        const { photos } = this.state;
        return (
            <div style={{display:'flex',flexDirection:'column'}}>
                <Breadcrumb  first={"动画"} second={"画廊"}/>
                <Card bordered={false}>
                    <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter()}>全部</Button>
                    <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter('scenery')}>风景</Button>
                    <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter('nature')}>自然</Button>
                    <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter('other')}>其他</Button>
                </Card>
                <div style={{background:'#fff',flex:"1 1 auto"}} ref={(div)=>this.shuffleDemo=div}>
                    {
                        photos.map((item,i)=>(
                            <div className='photo-item'
                                key={item.src}
                                data-groups={JSON.stringify(item.groups)}
                                style={styles[item.style]}
                                >
                                <div className={'aspect aspect--'+item.size}>
                                <div className='aspect__inner'>
                                    <img src={item.src} alt="" width='100%' height='100%'/>
                                </div>
                              </div>
                            </div>
                        ))

                    }

                </div>
            </div>
        )
    }
}
const styles = {
    itemOne:{
        width:'25%',
        marginBottom:8,
        padding:'0 4px'
    },
    itemTwoCol:{
        width:'50%',
        marginBottom:8,
        padding:'0 4px'
    },
    itemTwoRow:{
        width:'25%',
        marginBottom:8,
        padding:'0 4px'
    },
    gallery:{
        display:'flex',
        flexDirection:"column",
        width:'100%',
        height:'100%'

    }
}
export default GalleryDemo;
