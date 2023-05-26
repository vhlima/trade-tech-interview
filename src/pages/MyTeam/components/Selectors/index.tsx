import { useSelectors } from "../../hooks/useSelectors";

import LeagueSelector from "./components/LeagueSelector";
import TeamSelector from "./components/TeamSelector";
import CountrySelector from "./components/CountrySelector";
import SeasonSelector from "./components/SeasonSelector";

const Selectors: React.FC = () => {
  const { selectedCountry, selectedLeague } = useSelectors();

  return (
    <>
      <CountrySelector />

      {selectedCountry && <LeagueSelector />}

      {selectedLeague && (
        <>
          <SeasonSelector />
          <TeamSelector />
        </>
      )}
    </>
  )
}

export default Selectors;