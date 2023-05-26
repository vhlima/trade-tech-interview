import { useState } from 'react';

type HandleError = (error: unknown) => void;

interface ErrorHandlerData {
  errorMessage?: string;
  handleError: HandleError;
  resetMessage: () => void;
}

export function useErrorHandler(): ErrorHandlerData {
  const [errorMessage, setErrorMessage] = useState<string>();

  const resetMessage = () => {
    setErrorMessage(undefined);
  }

  const handleError: HandleError = error => {
    if(error instanceof Error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('Internal error occured.');
    }
  }

  return {
    errorMessage,
    handleError,
    resetMessage,
  }
}