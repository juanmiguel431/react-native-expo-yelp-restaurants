import React, { useCallback, useEffect, useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { AxiosError } from 'axios';
import { Business, BusinessSearch } from '../models/yelp.models';

interface SearchScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<Business[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = useCallback(async (term: string) => {
    try {
      setErrorMessage('');
      const response = await yelp.get<BusinessSearch>('/search', {
        params: {
          term: term,
          sort_by: 'best_match',
          limit: 50,
          location: 'New York City'
        }
      });

      setResults(response.data.businesses);

    } catch (e) {
      setErrorMessage('Something went wrong.');
      if (e instanceof AxiosError) {
        console.log(e.response);
      } else if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }, []);

  useEffect(() => {
    searchApi('pasta');
  }, []);

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
