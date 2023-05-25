import { type Country } from '../../../../hooks/useCountrySelector';

import Typography from '../../../../../../components/Typography';

import CountryButton from '../CountryButton';

import './styles.css';
import { useCountrySelector } from '../../../../hooks/useCountrySelector';

interface Props {
  selectedCountryId?: string;
  onSelect: (country: Country) => void;
}

const CountryList: React.FC<Props> = props => {
  const { selectedCountryId, onSelect } = props;

  const { countriesResponse } = useCountrySelector();

  const { data: countries, error, isLoading } = countriesResponse;

  return (
    <ul className="country-list">
      {isLoading && <Typography component="p">Loading...</Typography>}

      {error && <Typography component="p" color="error">{error}</Typography>}
      
      {!isLoading && (!countries || countries.length === 0) ? (
        <Typography component="p" color="error">No country was found.</Typography>
      ) : countries.map(country => (
            <li key={`country-${country.code}`}>
              <CountryButton name={country.name} flagUrl={country.flag} isSelected={selectedCountryId === country.code} onClick={() => onSelect(country)} />
            </li>
          )
      )}
    </ul>
  )
}

export default CountryList;