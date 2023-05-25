import { type PropsWithChildren, createContext, useContext, useState } from "react";

import { useFetchFootballAPI } from "../../../hooks/useFetchFootballAPI";

export type League = {
  name: string;
  logo: string;
}

type ChangeSelectedLeague = (leagueId: string) => void;

interface LeagueSelectorContextData {
  leaguesResponse: {
    data: League[];
    error?: string;
    isLoading: boolean;
  };
  selectedLeague?: League;
  changeSelectedLeague: ChangeSelectedLeague;
}

const LeagueSelectorContext = createContext({} as LeagueSelectorContextData);

export const LeagueSelectorProvider: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  const [selectedLeague, setSelectedLeague] = useState<League | undefined>(undefined);

  const leaguesResponse = useFetchFootballAPI<League[]>({
    route: '',
    mock: Array.from({ length: 10 }).map((_, index) => ({
      "name": `Premier League ${index}`,
      "logo": "https://media.api-sports.io/football/leagues/2.png"
    }))
  });

  const changeSelectedLeague: ChangeSelectedLeague = leagueId => {
    if(!leaguesResponse.data) {
      return;
    }

    const leagueFound = leaguesResponse.data.find(league => league.name === leagueId);
    
    if(leagueFound) {
      setSelectedLeague(leagueFound);
    }
  }

  return (
    <LeagueSelectorContext.Provider value={{
      leaguesResponse: {
        ...leaguesResponse,
        data: leaguesResponse.data || [],
      },
      selectedLeague,
      changeSelectedLeague,
    }}>
      {children}
    </LeagueSelectorContext.Provider>
  )
}

export function useLeagueSelector(): LeagueSelectorContextData {
  const context = useContext(LeagueSelectorContext);

  if(!context) {
    throw new Error('useLeagueSelector must be used within an provider.');
  }

  return context;
}