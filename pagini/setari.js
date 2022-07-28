import {View, Text, StyleSheet, TextInput} from "react-native";
import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {formatTime, date, theme, setTheme} from '../functii';
import Space from '../components/Space';

export default class Setari extends Component {
    state = {
        tema: "#574e4d"
    };

    render() {
        var erori = "";
        return (
            <View>
                <Space/>
                <View style={styles.row}>
                    <Text>Timp recomandat (exprimat în ore)  </Text>
                    <TextInput style={styles.input} editable maxLength={1}/>
                </View>
                <Space/>
                <View style={styles.row}>
                    <Text>Alege limba  </Text>
                    <Text>RO</Text>
                    <Text> | </Text>
                    <Text>EN</Text>
                </View>
                <Space/>
                <View style={styles.row}>
                    <Text>Alege tema  </Text>
                    <Text onPress={() => {this.setState({tema: "#574e4d"}); setTheme(this.state.tema);}}>DARK </Text>
                    <Text> | </Text>
                    <Text onPress={() => {this.setState({tema: "#fff"}); setTheme(this.state.tema);}}> LIGHT</Text>
                </View>
                <Text>{erori}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme,
      alignItems: 'center',
      width: '48%'
    },
    title: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingRight: 30,
        paddingLeft: 30,
    },
    input: {
        backgroundColor: "#b8b8b8",
        width: 20
    }
});