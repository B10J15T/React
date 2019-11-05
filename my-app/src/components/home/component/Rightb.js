import React, {Component} from 'react';
import {RightbWrap,RbItem} from "../homestyle";
import {connect} from 'react-redux'
class Rightb extends Component{
    state={
       list2:[]
}
    render(){
        return(
            <div>
                <RightbWrap>
                   <RbItem>
                       <div>
                           <img src='//asset.ibanquan.com/s/30611/727/index_global4_pic_2?v=1568268246_1572510848' alt=""/>
                           <img src='//asset.ibanquan.com/s/30611/727/index_global4_pic_2?v=1568268246_1572510848' alt=""/>
                       </div>
                       {
                           this.props.list2.map((item,index)=>{
                               return(
                                   <p key={index}>{item.title}</p>
                               )
                           })
                       }
                   </RbItem>
                </RightbWrap>
            </div>
        )
    }
}
const mapState=(state)=>({
    list2:state.home.list2
})
export default connect(mapState,null)(Rightb)