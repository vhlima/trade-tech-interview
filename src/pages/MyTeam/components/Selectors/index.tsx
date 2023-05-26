import { useSelectors } from "../../hooks/useSelectors";

import CountrySelector from "../CountrySelector";
import LeagueSelector from "../LeagueSelector";
import TeamSelector from "../TeamSelector";

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