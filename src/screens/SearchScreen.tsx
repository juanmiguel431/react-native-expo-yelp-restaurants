import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

interface SearchScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [term, setTerm] = useState('JMPC');

  return (
    <View>
      <SearchBar
        value={term}
        onChange={setTerm}
        onTermSubmit={value => {
          console.log(value);
        }}
      />
      <Text>Search Screen - {term}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;
