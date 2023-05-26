import { useState } from 'react';

import { useErrorHandler } from './useErrorHandler';

import { useSession } from './useSession';

import { fetchFromFootballApi } from '../utils/fetchFromExternalSource';

type Fetch = (init?: RequestInit) => Promise<void>

export interface FetchFootballAPIContextData<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
  fetch: Fetch;
  resetData: () => void;
}

interface Props<T> {
  route: string;
  mock?: T;
}

export function useLazyFetchFootballAPI<T>(props: Props<T>): FetchFootballAPIContextData<T> {
  const { route, mock } = props;

  const { session } = useSession();

  const { errorMessage, handleError, resetMessage } = useErrorHandler();

  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const resetData = () => {
    setData(undefined);
    setLoading(false);
    resetMessage();
  }

  const fetch: Fetch = async init => {
    if(data || isLoading) {
      return;
    }

    console.log(`fetch from api`)

    try {
      setLoading(true);

      if(!session) {
        throw new Error('You must be authenticated to do that.');
      }

      if(mock) {
        setTimeout(() => {
          setData(mock);
          setLoading(false);
          return mock;
        }, 2000);
      }else{
        const response = await fetchFromFootballApi(session.accessToken, route, init);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
        return responseData;
      }

    }catch(err) {
      handleError(err);
    }
  }

  return {
    data,
    error: errorMessage,
    isLoading,
    fetch,
    resetData,
  }
}