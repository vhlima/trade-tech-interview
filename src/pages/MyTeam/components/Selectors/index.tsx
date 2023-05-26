import { useSelectors } from "../../hooks/useSelectors";

import LeagueSelector from "./components/LeagueSelector";
import TeamSelector from "./components/TeamSelector";
import CountrySelector from "./components/CountrySelector";

const Selectors: React.FC = () => {
  const { selectedCountry, selectedLeague } = useSelectors();

  return (
    <>
      <CountrySelector />

      {selectedCountry && <LeagueSelector />}
      
      {selectedLeague && <TeamSelector />}
    </>
  )
}

export default Selectors;