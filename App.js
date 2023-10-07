import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, extendTheme } from "native-base";

import { NavigationContainer } from '@react-navigation/native'
import Main from './Navigators/Main'

import ProductContainer from './Screens/Product/ProductContainer';
import Header from './Shared/Header';

const newColorTheme = {
  brand: {
      900: "#8287af",
      800: "#7c83db",
      700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
    <View style={styles.container}>
      <Header />
      <ProductContainer />
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
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
