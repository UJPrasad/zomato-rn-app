import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import zomatoApi from '../api/zomato';

const DetailScreen = props => {
  const [restaurant, updateRestaurant] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const {data} = await zomatoApi.get(
        `/restaurant?res_id=${props.route.params.id}`,
      );
      updateRestaurant(data);
    };
    fetch();
  }, [props.route.params.id]);

  if (!Object.keys(restaurant).length) {
    return null;
  }

  return (
    <>
      <View>
        <Image
          source={{
            uri: restaurant.featured_image || restaurant.thumb,
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Highlights</Text>
        <FlatList
          data={restaurant.highlights}
          keyExtractor={(item, idx) => `${idx}`}
          renderItem={({item}) => <Text style={styles.hList}>{item}</Text>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 240,
  },
  hList: {
    padding: 20,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
});

export default DetailScreen;
