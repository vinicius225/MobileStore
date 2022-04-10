
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppLoading} from 'expo';

import 'react-native-gesture-handler';

import Routes from './src/router'

function App(){


  return(
    <>
  <Routes/>
  </>
  
  )
}
const styles = StyleSheet.create(
  {

  }
)


export default App;
