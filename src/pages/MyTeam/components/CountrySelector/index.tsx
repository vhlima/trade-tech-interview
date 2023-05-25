import { useState } from 'react';

import SelectedCountry from './components/SelectedCountry';

import './styles.css';

const CountrySelector: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="country-selector">
      <SelectedCountry onClick={() => setOpen(previousState => !previousState)} />
    </div>
  )
}

export default CountrySelector;