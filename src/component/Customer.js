import React, {useEffect, useState} from "react";
import {Form, Icon, Input, Button, Row, Col, Table,Divider} from 'antd';
import 'antd/dist/antd.css';
// import 'axios';
// import '../component/Customer.css'

function CustomerForm(props) {

    const [list, setList] = useState([]);
    const icnStyle = {
        ":hover": {
            color: "#f70000",
            cursor:"pointer",
        },
        cursor:"pointer",

    };
    const [updateBtn,setUpdateBtn] = useState(true);


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
                        props.form.resetFields();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    };

    const rowClick = (e)=> {
        // alert("Row Clicked");
        console.log(e.id);
        console.log(e.name);
        props.form.setFieldsValue({id:e.id,name:e.name,address:e.address});
        setUpdateBtn(false);
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

    const icnDelete = (e)=>{
      // alert(e);

        console.log(e.target);
    };


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
                    <Icon style={icnStyle} type="rest" theme="filled" onClick={icnDelete} />
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
                                <Input disabled={!updateBtn} id={"id"}
                                       prefix={<Icon type="safety-certificate" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Customer ID"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: 'Please input customer name'}],
                            })(
                                <Input id={"name"}
                                       prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Customer Name"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('address', {
                                rules: [{required: true, message: 'Please input address'}],
                            })(
                                <Input id={"address"}
                                       prefix={<Icon type="home" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Address"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            <Row>
                                <Button id={"btnSave"} style={btnStyle} disabled={!updateBtn} type="primary" htmlType="submit" className="login-form-button">
                                    Save
                                </Button>
                                <Button style={btnStyle} type="default" htmlType="reset" className="login-form-button" onClick={()=>{props.form.resetFields(); setUpdateBtn(true);}} >
                                    Clear
                                </Button>
                                <Button id={"btnUpdate"} style={btnStyle} disabled={updateBtn} type="danger" htmlType="submit" className="login-form-button">
                                    Update
                                </Button>
                                {/*<input id={"clickBtn"} type="button" value={"Click"} disabled={true}/>*/}
                            </Row>
                        </Form.Item>
                    </Form>
                </Col>

                <Col span={11}>
                    <Table rowKey={record => record.id} dataSource={list} columns={columns} onRowClick={rowClick} />;
                </Col>

            </Row>

        </div>
    );
}

export default Form.create({name: 'normal_login'})(CustomerForm);
