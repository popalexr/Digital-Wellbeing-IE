import {View, Text, StyleSheet, FlatList} from "react-native";
import React, { Component } from 'react';
import Space from '../components/Space';

const continut = [
    {
        id: 0,
        subtitlu: "Ce fac dacă...",
        text: "» primesc mail în care sunt amenințat?\n" +
        "-> le ignor și/sau le raportez poliției\n" +
        "» dacă primesc un link ciudat, ce pare a fi SCAM?\n" +
        "-> îl ignori, logic"
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
        subtitlu: "Sfaturi pentru a fi protejat pe Social Media",
        text: "» încearcă să nu-ți expui viața privată\n" +
        "» pozele pe care le postezi să nu fie în ipostaze stânjenitoare\n" +
        "» ai grijă ca glumele pe care le faci/distribui să nu fie folosite împotriva ta"
    },
    {
        id: 4,
        subtitlu: "Cum pot ajunge să fiu victima hărțuitorilor?",
        text: "» Prin a accesa link-uri de tip SCAM\n" +
        "» Prin a vorbi cu persoanele străine\n" +
        "-> în acest caz poți fi victima pedofililor :(\n" +
        "» Prin a-mi expune viața privată constant\n"
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
        subtitlu: "Sfaturi utile",
        text: "» Stai cel mult 2 ore pe telefon/calculator\n"+
        "» Citește în timpul liber și/sau practică un sport\n" +
        "» Când stai pe internet, ai grijă la hărțuitori.\n"
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

export default class Sfaturi extends Component {
    render() {
        var erori = "";
        return (
            <View>
                <Text style={styles.title}>Sfaturi pentru a fi responsabil pe internet</Text>
                <Space/>
                <Info/>
                <Space/>
                <Space/>
                <Space/>
                <Space/>
                <Space/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    subtitlu: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});