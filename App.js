import { Component, useState } from "react";
import { formatTime, setStartDate, date } from './functii';
import { StyleSheet, Text, SafeAreaView, View, Button, Image } from 'react-native';
import Space from "./components/Space";
import Main from "./pagini/main"
import Informatii from "./pagini/info";
import TimpPetrecut from "./components/timp";

function pg(pagina)
{
  if(pagina == "Main") return (<Main/>);
  else if(pagina == "Info") return (<Informatii/>);
}

export default function App() {
  setStartDate();
  const [pag, setPag] = useState("Main");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./title.png')}/>
      <View style={styles.row}>
        <Button onPress={() => {setPag("Main");}} title="Home"></Button>
        <Button onPress={() => {setPag("Info");}} title="Informatii"></Button>
        <Button onPress={() => {setPag("Settings");}} title="Setări"></Button>
        <Button onPress={() => {setPag("Hist");}} title="Istoric"></Button>
      </View>
      <Space></Space>
      {pg(pag)}
    </SafeAreaView>
  );
};

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
