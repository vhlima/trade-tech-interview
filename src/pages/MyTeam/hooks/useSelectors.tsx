import { type PropsWithChildren, createContext, useContext, useState } from "react";

import { type FetchFootballAPIContextData, useLazyFetchFootballAPI } from "../../../hooks/useLazyFetchFootballAPI";

export type Country = {
  name: string;
  code: string;
  flag: string;
}

export type League = {
  name: string;
  logo: string;
}

export type Team = {
  name: string;
  logo: string;
}

type ChangeSlected = (id: string) => void;

interface SelectorsData {
  countriesQuery: FetchFootballAPIContextData<Country[]>;
  selectedCountry?: Country;
  changeSelectedCountry: ChangeSlected;

  leaguesQuery: FetchFootballAPIContextData<League[]>;
  selectedLeague?: League;
  changeSelectedLeague: ChangeSlected;

  teamsQuery: FetchFootballAPIContextData<Team[]>;
  selectedTeam?: Team;
  changeSelectedTeam: ChangeSlected;
}

const SelectorsContext = createContext({} as SelectorsData);

export const SelectorsProvider: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();
  const [selectedLeague, setSelectedLeague] = useState<League | undefined>();
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>();
  
  const countriesQuery = useLazyFetchFootballAPI<Country[]>({ 
    route: '', 
    mock: Array.from({ length: 10 }).map((_, index) => ({
      "name": `England ${index}`,
      "code": `GB${index}`,
      "flag": "https://media.api-sports.io/flags/gb.svg"
  }))});

  const leaguesQuery = useLazyFetchFootballAPI<Team[]>({
    route: '',
    mock: Array.from({ length: 10 }).map((_, index) => ({
      "name": `Premier League ${index}`,
      "logo": "https://media.api-sports.io/football/leagues/2.png"
    }))
  });

  const teamsQuery = useLazyFetchFootballAPI<Team[]>({
    route: '',
    mock: Array.from({ length: 10 }).map((_, index) => ({
      "name": `Manchester United ${index}`,
      "logo": "https://media.api-sports.io/football/teams/33.png"
    }))
  });

  const changeSelectedCountry: ChangeSlected = countryId => {
    const countryFound = 
      (countriesQuery.data || []).find(country => country.name === countryId);
    
    if(countryFound && countryFound.name !== selectedCountry?.name) {
      setSelectedCountry(countryFound);

      leaguesQuery.resetData();
      teamsQuery.resetData();
  
      setSelectedLeague(undefined);
      setSelectedTeam(undefined);
    }
  }

  const changeSelectedLeague: ChangeSlected = leagueId => {
    const leagueFound = 
      (leaguesQuery.data || []).find(league => league.name === leagueId);
    
    if(leagueFound && leagueFound.name !== selectedLeague?.name) {
      setSelectedLeague(leagueFound);
      teamsQuery.resetData();
    }
  }

  const changeSelectedTeam: ChangeSlected = teamId => {
    const teamFound = 
      (teamsQuery.data || []).find(team => team.name === teamId);
    
    if(teamFound && teamFound.name !== selectedTeam?.name) {
      setSelectedTeam(teamFound);
    }
  }

  return (
    <SelectorsContext.Provider value={{
      countriesQuery,
      selectedCountry,
      changeSelectedCountry,
      leaguesQuery,
      selectedLeague,
      changeSelectedLeague,
      teamsQuery,
      selectedTeam,
      changeSelectedTeam,
    }}>
      {children}
    </SelectorsContext.Provider>
  )
}

export function useSelectors(): SelectorsData {
  const context = useContext(SelectorsContext);

  if(!context) {
    throw new Error('useSelectors must be used within an provider.');
  }

  return context;
}