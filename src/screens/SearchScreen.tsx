import React, { useState } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { AxiosError } from 'axios';
import { Business, BusinessSearch } from '../models/yelp';

interface SearchScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<Business[]>([]);

  const searchApi = async (term: string) => {
    try {
      const response = await yelp.get<BusinessSearch>('/search', {
        params: {
          term: term,
          sort_by: 'best_match',
          limit: 50,
          location: 'New York City'
        }
      });

      setResults(response.data.businesses);
      console.log('JMPC', response.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response);
      } else if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  return (
    <View>
      <SearchBar
        value={term}
        onChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;
