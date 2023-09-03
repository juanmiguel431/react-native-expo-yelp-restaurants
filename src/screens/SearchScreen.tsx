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
    <View style={styles.containerStyle}>
      <SearchBar
        value={term}
        onChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text style={styles.searchResultStyle}>We have found {results.length} Results</Text>
      {errorMessage && <Text style={styles.searchResultStyle}>{errorMessage}</Text>}
      <ScrollView>
        {noPrice.length > 1 && <ResultList title="No Price" results={noPrice}/>}
        {costEffective.length > 1 && <ResultList title="Cost Effective" results={costEffective}/>}
        {bitPricier.length > 1 && <ResultList title="Bit Pricier" results={bitPricier}/>}
        {bitSpender.length > 1 && <ResultList title="Big Spender" results={bitSpender}/>}
        {superSpender.length > 1 && <ResultList title="Super" results={superSpender}/>}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  searchResultStyle: {
    marginLeft: 15
  },
});

export default SearchScreen;
