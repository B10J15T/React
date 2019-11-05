import React,{Component} from 'react';
import {AttrWrap} from './AttrStyle';
import axios from 'axios';
class Attributes extends Component{
    state={
        title:'',
        p:'',
    }
    render(){
        return(
            <div>
                <AttrWrap>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.p}</p>
                </AttrWrap>
            </div>
        )
    }
componentDidMount() {
const id =this.props.match.params.id;
    axios.get('http://jsonplaceholder.typicode.com/posts/' +id)
        .then((res) => {
           this.setState({
               title:res.data.title,
               p:res.data.body
           })
        })
}
}

export default Attributes