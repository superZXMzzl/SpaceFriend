import React, { Component } from 'react';
import {Row, Col} from 'antd';
import SatSetting from './SatSetting';
import SatList from './SatList';
import WordMap from './WordMap';
import axios from 'axios';
import {NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY} from "../constants";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            satInfo: null,
            settings: null,
            isLoadingList: false
        }
    }

    showNearbySatellite = (setting) => {
        this.setState({
            settings: setting
        })
        this.fetchSatellite(setting);
    }

    fetchSatellite = (setting) => {
        const {latitude, longitude, elevation, altitude} = setting;
        const url = `/api/${NEARBY_SATELLITE}/${latitude}/${longitude}/${elevation}/${altitude}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        this.setState({
            isLoadingList: true
        })

        axios.get(url)
            .then(response => {
                this.setState({
                    isLoadingList: false,
                    satInfo: response.data
                })
                console.log("Success: ", response);
            })
            .catch(error => {
                console.log("Error in fetch satellite: ", error);
            })
    }

    showMap = () => {
        console.log('show on the map');
    }

    render() {
        const {satInfo, isLoadingList} = this.state;
        return (
            <Row className='main'>
                <Col span={8} className="left-side">
                    <SatSetting onShow={this.showNearbySatellite}/>
                    <SatList satInfo={satInfo} isLoad={isLoadingList} onShowMap={this.showMap}/>
                </Col>
                <Col span={16} className="right-side">
                    <WordMap />
                </Col>
            </Row>
        );
    }
}

export default Main;