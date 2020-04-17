import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const CardLayout = ({item}) => {
  const img = item.featured_image || item.thumb;
  if (img.length === 0) {
    console.log(item.name);
  }
  return (
    <View>
      <Image
        source={{
          uri: item.featured_image || item.thumb,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.rate}>
        {item.user_rating.aggregate_rating} stars, {item.user_rating.votes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    margin: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rate: {
    marginLeft: 10,
  },
});

export default CardLayout;
