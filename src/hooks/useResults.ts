import { useState, useEffect, useCallback } from 'react';
import yelp from '../api/yelp';
import { Business, BusinessSearch } from '../models/yelp.models';
import { AxiosError } from 'axios';

type UseResultsResponse = [searchApi: (term: string) => Promise<void>, results: Business[], errorMessage: string];

export default function useResults(): UseResultsResponse {
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
  }, [searchApi]);

  return [searchApi, results, errorMessage];
}
