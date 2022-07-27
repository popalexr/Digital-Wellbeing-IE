import {View, Text} from "react-native";
import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {formatTime, date} from '../functii';

export default class TimpPetrecut extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        time: date
    };

    render() {
        return (
            <View>
                <Text>Timp petrecut pe telefon {formatTime(this.state.time)}</Text>
                <Text onPress={() => {this.setState({time: date});}}>Click pt refresh</Text>
            </View>
        );
    }
};