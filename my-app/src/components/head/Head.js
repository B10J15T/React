import React from 'react';
import {connect} from "react-redux";
import {HeadWrap, Logo, Nav, NavItem, Search, SearchWrap, SrarchInfo} from "./headstyle";
import * as headActionCreaters from './store/headActionCreaters'
import {BrowserRouter as Router, NavLink, Route,Switch} from "react-router-dom";
import Details from "../Details_page/Details";
import Home from "../home/Home";
import Attributes from "../home/Attributes";
import Sign_in from "../Sign_in/Sign_in";
import NotFont from "../NotFond/NotFont";
function showInfo(flag) {
    if (flag) {
        return (
            <SrarchInfo>
                <span>精品锅具</span>
                <span>厨房用品</span>
                <span>酒杯茶具</span>
            </SrarchInfo>
        )
    } else {
        return null
    }
}

function Head(props) {
    /*解构赋值*/
    const {flag, inputFocus, inputBlue} = props

    return (
        <div>
            <Router>

            <HeadWrap>
                <Logo/>
                <Nav>
                      <NavLink to='/Home'> <NavItem>首页</NavItem></NavLink>
                      <NavLink to='/Details'><NavItem>详情页</NavItem></NavLink>
                </Nav>
                <SearchWrap>
                    <Search className={flag ? 'flag' : ''}
                            onFocus={inputFocus}
                            onBlur={inputBlue}/>
                    <span className="glyphicon glyphicon-search"></span>
                </SearchWrap>
                {showInfo(flag)}
            </HeadWrap>
                <Switch>
                <Route exact path='/' component={Sign_in}/>
            <Route exact  path='/Home' component={Home}/>
            <Route path='/Details' component={Details}/>
            <Route path='/Attr/:id' component={Attributes}/>
            <Route path='*' component={NotFont}/>
                </Switch>
        </Router>
        </div>

    )

}

const mapState = (state) => ({
    flag: state.head.flag
});
const mapDispatch = (dispatch) => ({
    inputFocus() {
        /*    const action = {
                type: 'infocus'
            }
            dispatch(action)*/
        dispatch(headActionCreaters.handlerFocus())
    },
    inputBlue() {
        /*  const action={
              type:'inBlur'
          }
          dispatch(action)*/
        dispatch(headActionCreaters.handlerBlue())
    }

})
export default connect(mapState, mapDispatch)(Head)