import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = () => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Detail Screen</Text>
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

export default DetailScreen;
