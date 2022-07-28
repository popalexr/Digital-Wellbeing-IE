import { Component } from "react";
import { StyleSheet, Text, FlatList, SafeAreaView, View, Button, Image } from 'react-native';
import Space from "../components/Space";
import {theme} from "../functii";

const continut = [
    {
        id: 0,
        subtitlu: "Statistici",
        text: "» 96% din copiii 12-17 ani folosesc telefonul\n" +
        "» 71% sunt dependenți de smartphone\n" +
        "» 83% se simt anxioși fără telefon\n" +
        "» 100% șanse să fii și tu dependent :)"
    },
    {
        id: 1,
        subtitlu: "",
        text: ""
    },
    {
        id: 1,
        subtitlu: "",
        text: ""
    },
    {
        id: 3,
        subtitlu: "Boli provocate de dependență",
        text: "» anxietate (100%)\n" +
        "» miopie/hipermetropie (75%)\n" +
        "» namofobie (60%)"
    },
    {
        id: 4,
        subtitlu: "Activități alternative",
        text: "Pentru a reduce timpul petrecut pe telefon, îți recomand...\n" +
        "» să citești o carte\n" +
        "» să faci voluntariat\n" +
        "» să îți plimbi animalul de companie (dacă n-ai, adoptă unul :) )\n" +
        "» să ieși în oraș cu prietenii"
    },
    {
        id: 5,
        subtitlu: "",
        text: ""
    },
    {
        id: 6,
        subtitlu: "",
        text: ""
    },
    {
        id: 7,
        subtitlu: "Recomandare de cărți",
        text: "» ...\n"+
        "» ...\n" +
        "» ...\n"
    }
];

const continut_prelucrat = ({item}) => (
    <View style={styles.container}>
        <Text style={styles.subtitlu}>{item.subtitlu}</Text>
        <Text>{item.text}</Text>
    </View>
);

const Info = () => {
    return (
        <FlatList
            data={continut}
            renderItem={continut_prelucrat}
            numColumns={2}
        />
    );
};

export const Informatii = () => {
        return (
            <View>
                <Text style={styles.title}>Informații și sfaturi pentru folosirea telefonului</Text>
                <Info/>
                <Space/>
                <Space/>
            </View>
          );
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
    subtitlu: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });