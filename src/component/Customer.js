import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
// import '../component/Customer.css'

function CustomerForm(props){

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

      const { getFieldDecorator } = props.form;

    return(
        <div>
            <h2><Icon type="user-add" /> Manage Customers</h2>
       <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('id', {
            rules: [{ required: true, message: 'Please input customer ID' }],
          })(
            <Input
              prefix={<Icon type="safety-certificate" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Customer ID"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input customer name' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Customer Name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input address' }],
          })(
            <Input
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Address"
            />,
          )}
        </Form.Item>   

        <Form.Item>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>

        </div>
    );
}

export default Form.create({ name: 'normal_login' })(CustomerForm);
