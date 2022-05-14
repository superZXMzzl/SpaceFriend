import React, { Component } from 'react';
import {Form, Button, InputNumber} from 'antd';

class SatSetting extends Component {
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
                SatSetting
            </div>
        );
    }
}

export default SatSetting;