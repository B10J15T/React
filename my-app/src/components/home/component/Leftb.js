import React, {Component} from 'react';
import {LeftbWrap,LeftList} from "../homestyle";
import {connect} from "react-redux";
import {BrowserRouter as Router,Route,NavLink,Switch} from "react-router-dom";


class Leftb extends Component{
    state={
        list:[]
    }
    render(){
        return(
            <div>
                <LeftbWrap>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <LeftList key={index}>
                                    <img src={item.imgUrl} alt=""/>
                                    <div>

                                        <NavLink to={'/Attr/'+item.id}><h3>{item.id}.{item.txt}</h3></NavLink>
                                          <p>{item.desc}</p>

                                    </div>
                                </LeftList>
                            )
                        })
                    }
                </LeftbWrap>
            </div>
        )
    }
}
const mapState=(state)=>({
    list:state.home.list
})
export  default connect(mapState,null)(Leftb)