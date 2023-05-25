import Select from "../../../../../../components/Select";
import Typography from "../../../../../../components/Typography";

import { useCountrySelector } from "../../../../hooks/useCountrySelector";

const CountrySelect: React.FC = () => {
  const { selectedCountry, changeSelectedCountry } = useCountrySelector();

  const { countriesResponse } = useCountrySelector();

  const { data, error, isLoading } = countriesResponse;

  if(isLoading) {
    return <Typography component="p">Loading...</Typography>;
  }

  if(error) {
    return <Typography component="p" color="error">{error}</Typography>;
  }

  const countriesOptions = 
    (data || []).map(country => ({ name: country.name, logoUrl: country.flag }));

  return (
    <Select 
      selectedOptionId={selectedCountry?.name} 
      options={countriesOptions} 
      onChange={changeSelectedCountry} 
    />
  )
}

export default CountrySelect;