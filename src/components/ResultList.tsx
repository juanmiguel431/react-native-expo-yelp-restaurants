import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Business } from '../models/yelp.models';
import ResultDetail from './ResultDetail';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { SCREEN } from '../models';

interface ResultListProps {
  title: string;
  results: Business[];
}

type Props = ResultListProps & NavigationInjectedProps;

const ResultList: React.FC<Props> = ({ title, results, navigation }) => {
  if (results.length === 0) {
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
              navigation.navigate(SCREEN.ResultsShow, {
                id: item.id
              });
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

export default withNavigation<Props>(ResultList) as React.ComponentType<ResultListProps>;
