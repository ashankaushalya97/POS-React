import React, {useEffect, useState} from "react";
import {Form, Icon, Input, Button, Row, Col, Table,Divider} from 'antd';
import 'antd/dist/antd.css';
// import 'axios';
// import '../component/Customer.css'

function CustomerForm(props) {

    const [list, setList] = useState([]);


    const btnStyle = {
        margin: 10
    };


    const axios = require('axios');


    // Axios.get('http://localhost:5050/api/v1/customers/').then((response)=>{
    //     console.log(response);
    // }).catch((error)=>{
    //     console.log(error);
    // });
    // const res = useState("");

    // console.log(list);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values.name);
                axios.post('http://localhost:5050/api/v1/customers/', values)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    };

    const {getFieldDecorator} = props.form;

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5050/api/v1/customers/',
            responseType: 'json'
        }).then(function (response) {
            // console.log(response.data);

            // setList({list:response.data});
            setList(response.data);

            // console.log(list);

        });
    });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Customer Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '',
            key: 'delete',
            render: (text, record) => (
                <span>
                     {/*<Divider type="vertical"/>*/}
                     <Icon type="rest" theme="filled" />
                </span>
            ),
        },
    ];


    return (
        <div className="col-12">


            <Row type="flex" justify="space-between">
                <Col span={12}>
                    <h2><Icon type="user-add"/> Manage Customers</h2>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('id', {
                                rules: [{required: true, message: 'Please input customer ID'}],
                            })(
                                <Input
                                    prefix={<Icon type="safety-certificate" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Customer ID"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: 'Please input customer name'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Customer Name"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('address', {
                                rules: [{required: true, message: 'Please input address'}],
                            })(
                                <Input
                                    prefix={<Icon type="home" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Address"
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
    );
}

export default Form.create({name: 'normal_login'})(CustomerForm);
