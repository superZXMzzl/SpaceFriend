import React, { Component } from 'react';
import {Button, List, Avatar, Checkbox, Spin} from 'antd';
import satellite from '../assets/images/satellite.svg';

class SatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    onChange = e => {
        const {dataInfo, checked} = e.target;
        const {selected} = this.state;
        const list = this.addOrRemove(dataInfo, checked, selected);
        this.setState({
            selected: list
        })
    }
    
    addOrRemove = (item, status, list) => {
        const found = list.some(entry => entry.satif === item.satid);
        if (status && !found){
            list = [...list, item];
        } else if (!status && found) {
            list = list.filter(entry => {
                return entry.satif !== item.satid;
            })
        }
        return list;
    }

    onShowSatMap = () => {
        this.props.onShowMap(this.state.selected);
    }

    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const {isLoad} = this.props;
        const {selected} = this.state;

        return (
            <div className='sat-list-box'>
                <Button className='sat-list-btn' size='large' disabled={selected.length === 0} onClick={this.onShowSatMap}>
                    Track on the map
                </Button>
                <hr />
                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large" />
                        </div>
                        :
                        <List
                            className="sat-list"
                            itemLayout="horizontal"
                            size="small"
                            dataSource={satList}
                            renderItem={item => (
                                <List.Item
                                    actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size={50} src={satellite} />}
                                        title={<p>{item.satname}</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />

                                </List.Item>
                            )}
                        />
                }
            </div>
        );
    }
}

export default SatList;