import { useSelectors } from "../../hooks/useSelectors";

import CountrySelector from "../CountrySelector";
import LeagueSelector from "../LeagueSelector";

const Selectors: React.FC = () => {
  const { selectedCountry } = useSelectors();

  return (
    <>
      <CountrySelector />

      {selectedCountry && <LeagueSelector />}
    </>
  )
}

export default Selectors;