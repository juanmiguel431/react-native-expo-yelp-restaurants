import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ResultsShowScreenProps } from '../models/screen';
import useResult from '../hooks/useResult';
import ImageLoader from '../components/ui/ImageLoader';

const ResultsShowScreen: React.FC<ResultsShowScreenProps> = ({ route }) => {
  const { isLoading, result, errorMessage } = useResult(route.params.id);

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && errorMessage && <Text>{errorMessage}</Text>}
      {!isLoading && result &&
        <>
          <Text>{result.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ImageLoader uri={item} style={styles.imageStyle}/>
            )}
          />
        </>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200
  }
});

export default ResultsShowScreen;
