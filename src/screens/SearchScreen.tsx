import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

interface SearchScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;
