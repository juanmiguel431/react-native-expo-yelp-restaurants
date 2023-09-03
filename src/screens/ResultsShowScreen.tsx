import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface ResultsShowScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const ResultsShowScreen: React.FC<ResultsShowScreenProps> = (props) => {
  return (
    <View>
      <Text>Hello there!</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
