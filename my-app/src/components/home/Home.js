import React, {Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './homestyle'
import Lefttop from './component/Lefttop'
import Leftb from './component/Leftb'
import Righttop from './component/Righttop'
import Rightb from './component/Rightb'
import axios from 'axios'
import {connect} from 'react-redux'
import Img from './../../static/20191101164300.png'
class Home extends Component{
    render(){
        return(
            <div>
                    <HomeWrap>
                        <HomeLeft>
                            <i>
                            <img src="//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_15728609623" alt=""/>
                            </i>
                            <Lefttop/>
                            <Leftb/>
                        </HomeLeft>
                        <HomeRight>
                            <Righttop/>
                            <Rightb/>
                        </HomeRight>
                    </HomeWrap>
                </div>
        )
    }
    componentDidMount() {
        axios.get('/data/getHomeList.json').then((res)=>{
            console.log(res.data)
            const data=res.data.data;
    const action={
        type:'inp_home_data',
        data
    }
    this.props.changeData(action)
        })
    }
}
const mapDispatch=(dispatch)=>({
changeData(action){
    dispatch(action)
}
})
export default connect(null,mapDispatch)(Home)
