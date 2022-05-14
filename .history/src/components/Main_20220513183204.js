import React, { Component } from 'react';
import {Row, Col} from 'antd';
import SatSetting from './SatSetting';
import SatList from './SatList';
import axios from 'axios';
import {NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY} from "../constants";

class Main extends Component {
    render() {
        return (
            <Row className='main'>
                <Col span={8} className="left-side">
                    <SatSetting />
                    <SatList />
                </Col>
                <Col span={16} className="right-side">
                    right
                </Col>
            </Row>
        );
    }
}

export default Main;