import React, {Component} from 'react';
import {DetaWrap,Center} from "./DetailsStyle";
import { Carousel } from 'antd';
import Img1 from './../../static/1.jpg'
import Img2 from './../../static/2.jpg'
import Img3 from './../../static/3.jpg'
import Img4 from './../../static/4.jpg'

class Details extends Component {
    render() {
        return (
            <div>
                <DetaWrap>
                    <Center>
                        <h1>青竹良品原创生活类电商品牌</h1>
                        <Carousel autoplay>

                        <div>
                            <img src={Img1} alt=""/>
                        </div>
                        <div>
                            <img src={Img2} alt=""/>
                        </div>
                        <div>
                            <img src={Img3} alt=""/>
                        </div>
                        <div>
                            <img src={Img4} alt=""/>
                        </div>
                    </Carousel>
                        <p>
                            青竹良品原创生活类电商品牌,秉承一贯的严谨态度,我们深入世界各地,从源头全程
                            严格把控商品生产环节,力求帮消费者甄选到最优质的商品,全线采用天然原材料,控
                            制甲醛低量无害,采用进口工艺,国际生产线不断优化,食材保证核心原产地新鲜直
                            供,让你享受品质生活
                        </p>
                    </Center>

                </DetaWrap>
            </div>
        )
    }
}

export default Details