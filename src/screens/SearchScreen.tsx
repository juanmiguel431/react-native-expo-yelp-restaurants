import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

interface SearchScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [term, setTerm] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        value={term}
        onChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length}</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;
