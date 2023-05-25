import { useState } from 'react';

import { useCountrySelector } from '../../hooks/useCountrySelector';

import CountryList from './components/CountryList';
import SelectedCountry from './components/SelectedCountry';

import './styles.css';

const CountrySelector: React.FC = () => {
  const { selectedCountry, changeSelectedCountry } = useCountrySelector();

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="country-selector">
      <SelectedCountry onClick={() => setOpen(previousState => !previousState)} />

      {isOpen && <CountryList selectedCountryId={selectedCountry?.code} onSelect={country => {
        changeSelectedCountry(country);
        setOpen(false);
      }} />}
    </div>
  )
}

export default CountrySelector;