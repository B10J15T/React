import styled from 'styled-components';
import logo from './../../static/logo.jpg'
import erweima from './../../static/wb1.jpg'


export const FootWrap = styled.div`
width: 100%;
height: 272px;
background-color:#ccd0e7;
margin-top: 400px;
`;
export const Box = styled.div`
width: 1390px;
height: 250px;
margin: 0 auto;
display: flex;
`;
export const Left = styled.div`

flex: 1;
span{
background: url(${logo});
width:150px;
height: 80px;
display: block;
background-size: 150px 80px;
margin: 20px 20px 20px 0;
}
p{
line-height: 22px;
width: 400px;
}
`;
export const Center = styled.div`

flex: 1;
span{
background: url(${erweima});
width:150px;
height: 150px;
display: inline-block;
background-size:150px 150px;
margin:50px 25px 30px 23px;
}
`;
export const Right = styled.div`

flex: 1;
ul{
width: 100%;
height: 100%;
    margin: 23px 20px 0px 32px;
}
ul li{
    float: left;
    width: 132px;
    height: 40px;
    line-height: 40px;
text-align:center;
}
`;

