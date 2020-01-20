import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function App() {
 var json;
 var value;

  return (
  <PaperProvider>
    <View style={styles.container}>
      <Text>Welcome to Smart Watcher</Text>



      <Button mode='contained' onPress={() => getRerATrafficInfo()}>RER A</Button>

      <Text>{json}</Text>
      <Text>{value}</Text>
    </View>
    </PaperProvider>
  );


 function getRerATrafficInfo() {
 value = 1;

    fetch('https://api-ratp.pierre-grimaud.fr/v4/schedules/rers/A/bussy-saint-georges/A')
     .then(response => response.json())
     .then(responseJson => {
     console.log(responseJson)
       json = responseJson;
       return responseJson.movies;
     })
     .catch(error => {
       console.error(error);
     });
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
