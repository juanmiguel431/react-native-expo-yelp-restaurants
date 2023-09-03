import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import useResult from '../hooks/useResult';

interface ResultsShowScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ResultsShowScreen: React.FC<ResultsShowScreenProps> = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { isLoading, result, errorMessage } = useResult(id);

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && errorMessage && <Text>{errorMessage}</Text>}
      {!isLoading && result &&
        <>
          <Text>{result.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Image source={{ uri: item}} style={styles.imageStyle}/>
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
