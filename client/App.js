import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getServerEndpoint from './src/Network/getServerEndpoint';

export default function App() {

  const [serverValue, setServerValue] = useState()
  
  const getServerValue = async () => {
    try {
      const response = await fetch(`${getServerEndpoint()}/getValue`)
      const json = await response.json()
      setServerValue(json.value)
      console.log(global.location)
      //console.log(Platform)
      //console.log(json.value)
    } catch (error) {
      //console.log('Error')
      //console.error(error)
    } 
 }

 useEffect(() => {
  getServerValue()
 }, [])

  return (
    <View style={styles.container}>
      <Text>Server Value is: {serverValue} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
