import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Business } from '../models/yelp.models';
import ResultDetail from './ResultDetail';

type ResultListProps = {
  title: string;
  results: Business[];
};

const ResultList: React.FC<ResultListProps> = ({ title, results }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/*<Text style={styles.resultCountStyle}>Results {results.length}</Text>*/}
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <ResultDetail result={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10
  },
  // resultCountStyle: {
  //   marginLeft: 15
  // },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15
  }
});

export default ResultList;
