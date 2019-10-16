/**
 * @Date:   2019-10-08T11:27:56+08:00
 * @Last modified time: 2019-10-14T16:03:18+08:00
 */
import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const createHistory =  require('history').createHashHistory;
const history = createHistory();
class FormLogin extends React.Component{
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            history.push('/home')
          }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入账号' }],
                    })(
                        <Input
                          autoComplete="off"
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                    )}
                </Form.Item>
                <Form.Item className="formItemMargin">
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className="login-form-forgot" href="javascriot:void('#')">
                        忘记密码
                    </a>

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登 录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
//注意object大小写
Form.contextTypes= {
    router: React.PropTypes.object.isRequired
}

export default Form.create()(FormLogin);
