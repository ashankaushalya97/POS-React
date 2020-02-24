import React, {useEffect, useState} from 'react'
import {Button, Col, Form, Icon, Input, Row, Table} from "antd";

function Order(props) {
    const [list, setList] = useState([]);
    const axios = require('axios');

    const btnStyle = {
        margin: 10
    };
    const columns = [
        {title: 'Code', dataIndex: 'code', key: 'code'},
        {title: 'Description', dataIndex: 'description', key: 'description'},
        {title: 'Qty', dataIndex: 'qty', key: 'qty'},
        {title: 'UnitPrice', dataIndex: 'unitPrice', key: 'unitPrice'},
        // {
        //     title: 'Action',
        //     dataIndex: '',
        //     key: 'x',
        //     render: () => <a>Delete</a>,
        // },
    ];
    const {getFieldDecorator} = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

            }
        });
    };
    useEffect(() => {
        axios({
            method: 'get',
            // url: 'http://localhost:5050/api/v1/items/',
            responseType: 'json'
        }).then(function (response) {
            setList(response.data);
        });
    });

    return (
        <div>
            <div className="col-12">
                <Row type="flex" justify="space-between">
                    <Col span={12}>
                        <h2><Icon type="form"/> Manage Orders</h2>
                        <Form onSubmit={handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('code', {
                                    rules: [{required: true, message: 'Please input Item Code'}],
                                })(
                                    <Input
                                        prefix={<Icon type="code" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Item Code"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('description', {
                                    rules: [{required: true, message: 'Please input Item Description'}],
                                })(
                                    <Input
                                        prefix={<Icon type="code" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Item Description"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('qty', {
                                    rules: [{required: true, message: 'Please input Item Quantity'}],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Item Quantity"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('unitPrice', {
                                    rules: [{required: true, message: 'Please input Item UnitPrice'}],
                                })(
                                    <Input
                                        prefix={<Icon type="home" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Item UnitPrice"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item>
                                <Row>
                                    <Button style={btnStyle} type="primary" htmlType="submit" className="login-form-button">
                                        Save
                                    </Button>
                                    <Button style={btnStyle} type="default" htmlType="submit" className="login-form-button">
                                        Clear
                                    </Button>
                                    <Button style={btnStyle} type="danger" htmlType="submit" className="login-form-button">
                                        Delete
                                    </Button>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Col>

                    <Col span={11}>
                        <Table rowKey={record => record.id} dataSource={list} columns={columns}/>;
                    </Col>

                </Row>

            </div>
        </div>
    )
}
export default Form.create({name: 'normal_login'})(Order);
