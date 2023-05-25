import { useState, useEffect } from 'react';

import { useErrorHandler } from './useErrorHandler';

import { useSession } from './useSession';

import { fetchFromFootballApi } from '../utils/fetchFromExternalSource';

interface FetchFootballAPIContextData<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
}

interface Props<T> {
  route: string;
  mock?: T;
}

export function useFetchFootballAPI<T>(props: Props<T>): FetchFootballAPIContextData<T> {
  const { route, mock } = props;

  const { session } = useSession();

  const { errorMessage, handleError } = useErrorHandler();

  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFromApi = async () => {
      try {
        if(!session) {
          throw new Error('You must be authenticated to do that.');
        }

        if(mock) {
          setTimeout(() => {
            setData(mock);
            setLoading(false);
          }, 2000);
        }else{
          const response = await fetchFromFootballApi(session.accessToken, route);
          const responseData = await response.json();
          setData(responseData);
          setLoading(false);
        }

      }catch(err) {
        handleError(err);
      }
    }

    fetchFromApi();
  }, []);

  return {
    data,
    error: errorMessage,
    isLoading,
  }
}