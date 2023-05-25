import { useCountrySelector } from '../../hooks/useCountrySelector';

import SelectPicker from '../../../../components/SelectPicker';
import CountrySelect from './components/CountrySelect';

import './styles.css';

const CountrySelector: React.FC = () => {
  const { selectedCountry } = useCountrySelector();

  return (
    <div className="country-selector">
      <SelectPicker
        labelText="Select a country"
        emptyText="No country selected"
        selectedOption={
          selectedCountry && { name: selectedCountry.name, logoUrl: selectedCountry.flag }
        }
      >
        <CountrySelect />
      </SelectPicker>
    </div>
  )
}

export default CountrySelector;