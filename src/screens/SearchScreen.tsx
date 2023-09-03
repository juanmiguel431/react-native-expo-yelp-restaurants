import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

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
      <Text style={styles.searchResultStyle}>We have found {results.length} Results</Text>
      {errorMessage && <Text style={styles.searchResultStyle}>{errorMessage}</Text>}
      <ResultList
        title="No Price"
        results={results.filter(p => p.price === undefined || p.price === null || p.price === '')}
      />
      <ResultList title="Cost Effective" results={results.filter(p => p.price === '$')}/>
      <ResultList title="Bit Pricier" results={results.filter(p => p.price === '$$')}/>
      <ResultList title="Big Spender" results={results.filter(p => p.price === '$$$')}/>
      <ResultList title="Super" results={results.filter(p => p.price === '$$$$')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  searchResultStyle: {
    marginLeft: 15
  },
});

export default SearchScreen;
