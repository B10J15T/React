import React,{Component} from "react";
import {SignWrap,Zhezhao} from "./SignStyoe";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Sign_in extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.username==="user"&&values.password==='123'){
                    this.props.history.push('/Home');
                }else{
                    this.props.history.push('/');
                    alert('你输入的密码或账号错误,请重新填写')
                    values.username='';
                    values.password='';
                }
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
          <div>

              <SignWrap>
                  <Zhezhao></Zhezhao>
                  <Form onSubmit={this.handleSubmit} className="login-form">
                      <Form.Item>
                          {getFieldDecorator('username', {
                              rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                              <Input
                                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Username"
                              />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('password', {
                              rules: [{ required: true, message: 'Please input your Password!' }],
                          })(
                              <Input
                                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  type="password"
                                  placeholder="Password"
                              />,
                          )}
                      </Form.Item>
                      <Form.Item>
                          {getFieldDecorator('remember', {
                              valuePropName: 'checked',
                              initialValue: true,
                          })(<Checkbox>Remember me</Checkbox>)}


                          <Button type="primary" htmlType="submit" className="login-form-button">
                              登录
                          </Button>
                          <br/>
                      </Form.Item>
                  </Form>
              </SignWrap>
          </div>
        )
    }
}

export default Form.create()(Sign_in);