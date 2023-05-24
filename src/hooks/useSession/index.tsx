import { type PropsWithChildren, createContext, useContext, useState } from "react";

import { fetchFromFootballApi } from "../../utils/fetchFromExternalSource";

type SessionData = {
  email: string;
  accessToken: string;
}

type SignIn = (accessToken: string) => Promise<SessionData | undefined>;

type SignInResponse = {
  errors: Record<string, string>;
  response: {
    account: {
      email: string;
    }
  }
}

interface SessionContextData {
  session?: SessionData;
  signIn: SignIn;
}

const SessionContext = createContext({} as SessionContextData);

export const SessionProvider: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  const [session, setSession] = useState<SessionData>();

  const signIn: SignIn = async accessToken => {
    if(!accessToken) {
      throw new Error('You must provide an access token.');
    }

    const response = await fetchFromFootballApi(accessToken, '/status');

    const data: SignInResponse = await response.json();

    if(data.errors || Object.keys(data.errors).length > 0) {
      throw new Error('An error occurred when signin in.');
    }

    const updatedSession = {
      accessToken,
      email: data.response.account.email,
    }

    setSession(updatedSession)
    return updatedSession;
  }

  return (
    <SessionContext.Provider value={{
      session,
      signIn,
    }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession(): SessionContextData {
  const context = useContext(SessionContext);

  if(!context) {
    throw new Error('useSession must be used within an provider.');
  }

  return context;
}