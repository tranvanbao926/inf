import React, { Component } from 'react';
import {
    Platform, TouchableHighlight, Dimensions,
    ScrollView, Text
} from 'react-native';
import Modal from 'react-native-modalbox';
import BasicSectionList from "./BasicSectionList"

var screen = Dimensions.get('window');
export default class EditModall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FoodName: '',
            FoodDescription: ''
        };
    }
    showEditModall = () => {
        this.refs.myModall.open();
    }

    render() {
        return (
            <Modal
                ref={"myModall"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                }}
            >
                <BasicSectionList></BasicSectionList>
            </Modal>
        );
    }
}