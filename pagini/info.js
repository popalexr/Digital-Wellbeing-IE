import { Component } from "react";
import { formatTime, setStartDate, date } from '../functii';
import { StyleSheet, Text, SafeAreaView, View, Button, Image } from 'react-native';
import Space from "../components/Space";
import TimpPetrecut from "../components/timp";
export default class Informatii extends Component
{
    render()
    {
        return (
            <View>
                <Text style={styles.title}>Informații importante</Text>
                <Space/>
                <View style={styles.container}>
                    <Text style={styles.comp}>test</Text>
                    <Text style={styles.comp}>test2</Text>
                    <Text style={styles.comp}>test2</Text>
                    <Text style={styles.comp}>test2</Text>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      flexDirection: "row",
      flexWrap: "wrap",
    },
    comp: {
        width: '50%',
    },
    title: {
        alignItems: 'center',
        fontSize: 18,
    },
  });