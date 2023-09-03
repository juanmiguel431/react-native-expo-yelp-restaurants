import { useCallback, useEffect, useState } from 'react';
import { Business } from '../models/yelp.models';
import yelp from '../api/yelp';
import { AxiosError } from 'axios';

export default function useResult(id: string) {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Business | null>(null);

  const getResult = useCallback(async (id: string) => {
    try {
      setErrorMessage('');
      setIsLoading(true);
      // await new Promise(r => setTimeout(r, 3000));
      const response = await yelp.get<Business>(`/${id}`);
      setResult(response.data);

    } catch (e) {
      setResult(null);
      setErrorMessage('Something went wrong.');
      if (e instanceof AxiosError) {
        console.log(e.response);
      } else if (e instanceof Error) {
        console.log(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
      getResult(id);
  }, [id, getResult]);

  return { isLoading, errorMessage, result };
}
