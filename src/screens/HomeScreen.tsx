import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Text, View } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Hello there!</Text>
    </View>
  )
};

export default HomeScreen;
