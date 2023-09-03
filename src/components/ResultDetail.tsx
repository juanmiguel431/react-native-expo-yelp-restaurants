import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Business } from '../models/yelp.models';

type ResultDetailProps = {
  result: Business;
};

const ResultDetail: React.FC<ResultDetailProps> = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle}/>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15
  },
  imageStyle: {
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
    width: 250
  },
  titleStyle: {
    fontWeight: 'bold'
  },
});

export default ResultDetail;
