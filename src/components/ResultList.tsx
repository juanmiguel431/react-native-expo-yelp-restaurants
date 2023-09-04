import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Business } from '../models/yelp.models';
import ResultDetail from './ResultDetail';
import { NavigationProps } from '../models/screen';
import { SCREEN } from '../models';

interface ResultListProps {
  title: string;
  results: Business[];
}

const ResultList: React.FC<ResultListProps> = ({ title, results }) => {
  const navigation = useNavigation<NavigationProps>() as NavigationProps;

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/*<Text style={styles.resultCountStyle}>Results {results.length}</Text>*/}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREEN.ResultsShow, { id: item.id });
            }}>
            <ResultDetail result={item}/>
          </TouchableOpacity>
        )}
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
