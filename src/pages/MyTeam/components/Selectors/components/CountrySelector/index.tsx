import { useState } from 'react';

import { useSelectors } from '../../../../hooks/useSelectors';

import SelectPicker from '../../../../../../components/SelectPicker';
import CountrySelect from './components/CountrySelect';

const CountrySelector: React.FC = () => {
  const { selectedCountry, countriesQuery } = useSelectors();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    countriesQuery.fetch();
    setOpen(previousState => !previousState);
  }

  return (
    <SelectPicker
      labelText="Select a country"
      emptyText="No country selected"
      selectedOption={
        selectedCountry && { name: selectedCountry.name, logoUrl: selectedCountry.flag }
      }
      onClick={handleToggle}
    >
      {isOpen && <CountrySelect onClick={handleToggle} />}
    </SelectPicker>
  )
}

export default CountrySelector;