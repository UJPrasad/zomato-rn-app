import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBar = ({onTermChange, onSubmit, value}) => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.searchIcon}
        source={require('../assets/icons/search.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={onTermChange}
        onEndEditing={onSubmit}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f0eeee',
    borderRadius: 4,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    margin: 5,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
