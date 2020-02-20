import React from 'react'
import 'antd/dist/antd.css';
import '../css/style.scss'
import { Form, Icon, Input, Button,Row,Col } from 'antd';


function Item(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
    const { getFieldDecorator } = props.form;

    return (
          <div>
            <Form onSubmit={handleSubmit} className="login-form">
              <Row>
                <Col span={24}>
                  <h2>MANAGE ITEM</h2>
                </Col>
              </Row>
              <Row type="flex" justify="space-around">
                <Col span={11}>
                <Form.Item>
                  <h4>Item Code</h4>
                  {getFieldDecorator('itenCode', {
                    rules: [{ required: true, message: 'Please input your Item Code!' }],
                  })(
                    <Input
                      prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Item Code"
                    />,
                  )}
                </Form.Item>
                </Col>
                <Col span={11}>
                <Form.Item>
                  <h4>Item Description</h4>
                  {getFieldDecorator('itemDescription', {
                    rules: [{ required: true, message: 'Please input your Item Description!' }],
                  })(
                    <Input
                      prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Item Description"
                    />,
                  )}
                </Form.Item>
                </Col>
              </Row>
              <Row type="flex" justify="space-around">
                <Col span={11}>                
                <Form.Item>
                  <h4>Quntity</h4>
                  {getFieldDecorator('itemQty', {
                    rules: [{ required: true, message: 'Please input your Quntity' }],
                  })(
                    <Input
                      prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Quntity"
                    />,
                  )}
                </Form.Item></Col>
                <Col span={11}>
                <Form.Item>
                  <h4>Item Unitprice</h4>
                  {getFieldDecorator('itemUnitprice', {
                    rules: [{ required: true, message: 'Please input your Item Unitprice!' }],
                  })(
                    <Input
                      prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Unitprice"
                    />,
                  )}
                </Form.Item>
                </Col>
              </Row>
              <Row >
                <Col span={11}>
                  <div className="button-class">
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Save
                      </Button>&nbsp;&nbsp;
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Update
                      </Button>&nbsp;&nbsp;
                      <Button type="default" htmlType="button" className="login-form-button">
                        Clear
                      </Button>&nbsp;&nbsp;
                      <Button type="danger" htmlType="submit" className="login-form-button">
                        Delete
                      </Button>
                    </Form.Item>
                  </div>
                </Col>
              </Row>


               
              </Form>

           </div>
    );
}
export default Form.create({ name: 'normal_login' })(Item);
