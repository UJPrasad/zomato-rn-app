import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CardLayout from './CardLayout';
import {useNavigation} from '@react-navigation/native';

const ResultList = ({title, data}) => {
  const navigation = useNavigation();
  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                title: item.name,
                id: item.id,
              })
            }>
            <CardLayout item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ResultList;
