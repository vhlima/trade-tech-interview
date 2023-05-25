import Select from "../../../../../../components/Select";
import Typography from "../../../../../../components/Typography";

import { useCountrySelector } from "../../../../hooks/useCountrySelector";

interface Props {
  onClick: () => void;
}

const CountrySelect: React.FC<Props> = props => {
  const { onClick } = props;

  const { selectedCountry, changeSelectedCountry } = useCountrySelector();

  const { countriesResponse } = useCountrySelector();

  const handleChange = (optionId: string) => {
    changeSelectedCountry(optionId);
    onClick();
  }

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
      onChange={handleChange} 
    />
  )
}

export default CountrySelect;