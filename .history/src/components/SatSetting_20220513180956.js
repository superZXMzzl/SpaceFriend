import React, { Component } from 'react';
import {Form, Button, InputNumber} from 'antd';

class SatSetting extends Component {
    showSatellite = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err){
                this.props.onShow(values);
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 11},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 13},
            },
        };

        return (
            <div>
                <Form {...formItemLayout} className="sat-setting" onSubmit={this.showSatellite}>


                </Form>
            </div>
        );
    }
}

const SatSetting = Form.create({name: 'satellite-setting'})(SatSettingForm)

export default SatSetting;