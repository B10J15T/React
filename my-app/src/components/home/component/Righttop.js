import React, {Component} from 'react';
import {RighttWrap,RItem} from "../homestyle";
import {connect} from "react-redux";
class Righttop extends Component{
    state={
        list3:[]
    }
    render(){
        return(
            <div>
                <RighttWrap>
                    {
                        this.props.list3.map((item,index)=>{
                            return(
                                <RItem key={index}>
                                    <img src={item.topicUrl} alt=""/>
                                    <p>{item.title}</p>
                                </RItem>
                            )
                        })
                    }
                </RighttWrap>
            </div>
        )
    }
}
const mapState=(state)=>({
    list3:state.home.list3
})

export default connect(mapState,null)(Righttop)