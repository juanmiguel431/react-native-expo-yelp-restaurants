import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

interface SearchScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [term, setTerm] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (price: string) => {
    return results.filter(p => p.price === price);
  }

  const noPrice = results.filter(p => !p.price);
  const costEffective = filterByPrice('$');
  const bitPricier = filterByPrice('$$');
  const bitSpender = filterByPrice('$$$');
  const superSpender = filterByPrice('$$$$');

  return (
    <>
      <SearchBar
        value={term}
        onChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text style={styles.searchResultStyle}>
        {errorMessage || `We have found ${results.length} Results`}
      </Text>
      {errorMessage && <Text style={styles.searchResultStyle}>{errorMessage}</Text>}
      <ScrollView>
        <ResultList title="No Price" results={noPrice}/>
        <ResultList title="Cost Effective" results={costEffective}/>
        <ResultList title="Bit Pricier" results={bitPricier}/>
        <ResultList title="Big Spender" results={bitSpender}/>
        <ResultList title="Super" results={superSpender}/>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  searchResultStyle: {
    marginBottom: 20,
    marginLeft: 15
  },
});

export default SearchScreen;
