import { useCountrySelector } from '../../../../hooks/useCountrySelector';

import Select from '../../../../../../components/Select';
import Typography from '../../../../../../components/Typography';

interface Props {
  selectedCountryId?: string;
  onSelect: (countryId: string) => void;
}

const CountryList: React.FC<Props> = props => {
  const { selectedCountryId, onSelect } = props;

  const { countriesResponse } = useCountrySelector();

  const { data, error, isLoading } = countriesResponse;

  const countriesOptions = 
    (data || []).map(country => ({ name: country.name, logoUrl: country.flag }));

  return (
    <div>
      {isLoading && <Typography component="p">Loading...</Typography>}

      {error && <Typography component="p" color="error">{error}</Typography>}
      
      {!isLoading && countriesOptions.length === 0 ? (
        <Typography component="p" color="error">No country was found.</Typography>
      ) : (
        <Select 
          selectedOptionId={selectedCountryId} 
          options={countriesOptions} 
          onChange={onSelect} />
      )}
    </div>
  )
}

export default CountryList;