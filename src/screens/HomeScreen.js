import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Home Screen</Text>
        <Button onPress={() => navigate('Detail')} title="Go To Detail" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
