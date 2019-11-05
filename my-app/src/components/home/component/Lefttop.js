import React, {Component} from 'react';
import {LefttWrap,TopItem} from "../homestyle";
import {connect} from "react-redux";
class Lefttop extends Component{
    render(){
        return(
            <div>
                <LefttWrap>
                    {
                        this.props.list1.map((item,index)=>{
                            return(
                                <TopItem key={index}>
                                    <img src={item.topicUrl} alt=""/>
                                    <span>{item.txt}</span>
                                </TopItem>
                            )
                        })
                    }
                </LefttWrap>
            </div>
        )
    }
}
const mapState=(state)=>({
    list1:state.home.list1
})
export default connect(mapState,null)(Lefttop)