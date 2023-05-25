import { useState } from 'react';

import { useCountrySelector } from '../../hooks/useCountrySelector';

import SelectPicker from '../../../../components/SelectPicker';
import CountrySelect from './components/CountrySelect';

const CountrySelector: React.FC = () => {
  const { selectedCountry } = useCountrySelector();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
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