import React, {useEffect, useState} from 'react'
import 'antd/dist/antd.css';
import '../css/style.scss'
import {Button, Col, Form, Icon, Input, Row, Table} from 'antd';


function Item(props) {

    const [list, setList] = useState([]);
    const axios = require('axios');

    const btnStyle = {
        margin: 10
    };

    const icnStyle = {
        ":hover": {
            color: "#f70000",
            cursor:"pointer",
        },
        cursor:"pointer",

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:5050/api/v1/items/', values)
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        });
    };
    const {getFieldDecorator} = props.form;

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5050/api/v1/items/',
            responseType: 'json'
        }).then(function (response) {
            setList(response.data);
            });
    });

    const columns = [
        {title: 'Code', dataIndex: 'code', key: 'code'},
        {title: 'Description', dataIndex: 'description', key: 'description'},
        {title: 'Qty', dataIndex: 'qty', key: 'qty'},
        {title: 'UnitPrice', dataIndex: 'unitPrice', key: 'unitPrice'},
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => (
                <span>
                     {/*<Divider type="vertical"/>*/}
                    <Icon style={icnStyle} type="rest" theme="filled" />
                </span>
            ),
        },
    ];

    // return (
    //     <div>
    //         <Form onSubmit={handleSubmit} className="login-form">
    //             <Row>
    //                 <Col span={24}>
    //                     <h2>MANAGE ITEM</h2>
    //                 </Col>
    //             </Row>
    //             <Row type="flex" justify="space-around">
    //                 <Col span={11}>
    //                     <Form.Item>
    //                         <h4>Item Code</h4>
    //                         {getFieldDecorator('code', {
    //                             rules: [{required: true, message: 'Please input your Item Code!'}],
    //                         })(
    //                             <Input
    //                                 prefix={<Icon type="code" style={{color: 'rgba(0,0,0,.25)'}}/>}
    //                                 placeholder="Item Code"
    //                             />,
    //                         )}
    //                     </Form.Item>
    //                 </Col>
    //                 <Col span={11}>
    //                     <Form.Item>
    //                         <h4>Item Description</h4>
    //                         {getFieldDecorator('description', {
    //                             rules: [{required: true, message: 'Please input your Item Description!'}],
    //                         })(
    //                             <Input
    //                                 prefix={<Icon type="code" style={{color: 'rgba(0,0,0,.25)'}}/>}
    //                                 placeholder="Item Description"
    //                             />,
    //                         )}
    //                     </Form.Item>
    //                 </Col>
    //             </Row>
    //             <Row type="flex" justify="space-around">
    //                 <Col span={11}>
    //                     <Form.Item>
    //                         <h4>Quantity</h4>
    //                         {getFieldDecorator('qty', {
    //                             rules: [{required: true, message: 'Please input your Quantity'}],
    //                         })(
    //                             <Input
    //                                 prefix={<Icon type="code" style={{color: 'rgba(0,0,0,.25)'}}/>}
    //                                 placeholder="Quantity"
    //                             />,
    //                         )}
    //                     </Form.Item></Col>
    //                 <Col span={11}>
    //                     <Form.Item>
    //                         <h4>Item UnitPrice</h4>
    //                         {getFieldDecorator('unitPrice', {
    //                             rules: [{required: true, message: 'Please input your Item UnitPrice!'}],
    //                         })(
    //                             <Input
    //                                 prefix={<Icon type="code" style={{color: 'rgba(0,0,0,.25)'}}/>}
    //                                 placeholder="UnitPrice"
    //                             />,
    //                         )}
    //                     </Form.Item>
    //                 </Col>
    //             </Row>
    //             <Row>
    //                 <Col span={11}>
    //                     <div className="button-class">
    //                         <Form.Item>
    //                             <Button type="primary" htmlType="submit" className="login-form-button">
    //                                 Save
    //                             </Button>&nbsp;&nbsp;
    //                             {/*<Button type="primary" htmlType="submit" className="login-form-button">*/}
    //                             {/*    Update*/}
    //                             {/*</Button>&nbsp;&nbsp;*/}
    //                             <Button type="default" htmlType="button" className="login-form-button">
    //                                 Clear
    //                             </Button>&nbsp;&nbsp;
    //                             <Button type="danger" htmlType="submit" className="login-form-button">
    //                                 Delete
    //                           </Button>
    //                         </Form.Item>
    //                     </div>
    //                 </Col>
    //             </Row>
    //             <Row>
    //                 <Col span={24}>
    //                     <Table
    //                         rowKey={record => record.code}
    //                         columns={columns}
    //                         dataSource={list}/>
    //
    //                 </Col>
    //             </Row>
    //
    //
    //         </Form>
    //
    //     </div>
    // );

    return (
        <div className="col-12">


            <Row type="flex" justify="space-between">
                <Col span={12}>
                    <h2><Icon type="form"/> Manage Items</h2>
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
                                {/*<Button style={btnStyle} type="danger" htmlType="submit" className="login-form-button">*/}
                                {/*    Delete*/}
                                {/*</Button>*/}
                            </Row>
                        </Form.Item>
                    </Form>
                </Col>

                <Col span={11}>
                    <Table rowKey={record => record.code} dataSource={list} columns={columns}/>;
                </Col>

            </Row>

        </div>
    );
}

export default Form.create({name: 'normal_login'})(Item);
