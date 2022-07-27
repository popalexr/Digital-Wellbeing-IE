import { Component } from "react";
import { formatTime, setStartDate, date } from '../functii';
import { StyleSheet, Text, SafeAreaView, View, Button, Image } from 'react-native';
import Space from "../components/Space";
import TimpPetrecut from "../components/timp";
export default class Main extends Component
{
    render()
    {
        return (
            <View>
              <TimpPetrecut txt={formatTime(date)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingRight: 30,
        paddingLeft: 30,
    },
  });