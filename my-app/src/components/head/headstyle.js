import styled from 'styled-components';
import logo from './../../static/logo.jpg'
export const HeadWrap = styled.div`
height:60px;
background: #ccc;
`
export const Logo = styled.a`
height:60px;
width:100px;
display: inline-block;
background: url(${logo});
background-size: contain;
margin-left: 20px;
float:left;
`
export const Nav = styled.div`
height:60px;
width:300px;
float:left;
margin-left: 100px;
`
export const NavItem = styled.span`
font-size: 26px;
line-height: 60px;
margin-left: 50px;
`

export const SearchWrap = styled.div`
height: 80px;
width: 300px;
float:right;
position:relative;
right: 0px;
span{
position:absolute;
right: 140px;
top: 24px;
}
`
export const Search = styled.input.attrs({placeholder:'请输入内容'})`
height: 40px;
width: 180px;
border: none;
outline: none;
float:right;
box-sizing: border-box;
padding-left: 20px;
border-radius: 30px;
margin-top: 10px;
margin-right: 105px;
transition: 1s;
&.flag{
width: 220px;
transition: 1s;
}
`
export const SrarchInfo = styled.div`
height: 60px;
width: 400px;
float:right;
margin-right: 80px;
span{
font-size: 20px;
margin-left: 30px;
line-height: 60px;
}
`
