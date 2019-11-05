import styled from "styled-components";
export const HomeWrap=styled.div`
margin:30px auto;
width: 1200px;
height: 1000px;
`;
export const HomeLeft=styled.div`
margin:30px auto;
width: 600px;
height: 1000px;
float:left;
i{
display: block;
width: 100%;
height: 300px;
overflow: hidden;
}
img{
display:block;
width: 100%;
height: 300px;
transition:1s;
}
img:hover{
    transform: scale(1.1); //放大 倍数随意
}

`;
export const HomeRight=styled.div`
margin:30px auto;
width: 450px;
height: 1000px;
float:right;
`;
export const LefttWrap=styled.div`
margin-top: 16px;
height: 145px;
`;

export const TopItem=styled.div`
    height: 50px;
    width: 116px;
    border: 2px solid #ccc;
    float: left;
    margin: 15px 17px;
    line-height: 46px;
img{
height: 30px;
width: 60px;
margin: 8px 6px 0 0;
float:left;

}
`;
export const LeftbWrap=styled.div`
height: 500px;
`;
export const LeftList=styled.div`
height: 150px;
width: 600px;
border:2px solid #ccc;
margin-top: 30px;
img{
width: 200px;
height: 100px;
float:left;
margin:15px 15px;
}
div{
height: 148px;
float:right;
border-left: 2px solid #ccc;
width: 366px;
line-height: 21px;
}
h3{
text-align:center;
margin:10px 0;
font-size: 30px;
}
p{
text-indent: 2em;
padding: 0 4px;
}
`;

export const RighttWrap=styled.div`
height: 600px;
`;
export const RItem=styled.div`
margin-bottom: 28px;
height: 130px;
width: 450px;
border:2px solid #ccc;
text-align:center;
p{
font-size: 18px;
margin-top: 4px;
}
`;

export const RightbWrap=styled.div`
height: 500px;
`;
export const RbItem=styled.div`
margin-top: 30px;
width: 450px;
height: 400px;
div{
    width: 450px;
    height: 250px;
}
img{
    width: 215px;
    height: 240px;
    display: inline-block;
    margin: 5px;
}
p{
font-size: 26px;
text-align:center;
border-bottom:2px solid #ccc;
line-height: 94px;
}
`;
