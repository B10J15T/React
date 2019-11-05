import React, {Component} from 'react';
import {Box, Center, FootWrap, Left, Right} from "./footStyle";

class Foot extends Component {
    state = {
        list: ['关于我们', '支付方式', '相关服务','关于我们', '支付方式', '相关服务','关于我们', '支付方式', '相关服务','关于我们', '支付方式', '相关服务','关于我们', '支付方式', '相关服务',]
    }

    render() {
        return (
            <div>

                <FootWrap>
                    <Box>
                        {/*左*/}
                        <Left>
                            <span></span>
                            <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态
                                度，我们深入世界各地，从源头全程严格把控商品生
                                产环节，力求帮消费者甄选到最优质的商品，全线采
                                用天然原材料，控制甲醛低量无害，采用进口工艺，
                                国际生产线不断优化，食材保证核心原产地新鲜直
                                供，让你享受品质生活
                            </p>
                        </Left>
                        {/*中*/}
                        <Center>
                            <span></span>
                            <span></span>
                        </Center>
                        {/*右*/}
                        <Right>
                            <ul>
                            {
                                this.state.list.map((item,index)=>{
                                    return(
                                            <li key={index}>{item}</li>
                                    )
                                })
                            }
                            </ul>
                        </Right>
                    </Box>
                </FootWrap>
            </div>
        )
    }
}

export default Foot;