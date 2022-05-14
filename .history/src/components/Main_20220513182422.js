import React, { Component } from 'react';
import {Row, Col} from 'antd';
import SatSetting from './SatSetting';
import SatList from './SatList';

class Main extends Component {
    render() {
        return (
            <Row className='main'>
                <Col span={8} className="left-side">
                    <SatSetting />
                </Col>
                <Col span={16} className="right-side">
                    right
                </Col>
            </Row>
        );
    }
}

export default Main;