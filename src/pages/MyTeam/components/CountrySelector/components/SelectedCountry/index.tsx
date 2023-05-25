import { BsChevronDown } from 'react-icons/bs';

import { useCountrySelector } from '../../../../hooks/useCountrySelector';

import Typography from '../../../../../../components/Typography';
import ToggleOption from '../../../../../../components/ToggleOption';

import './styles.css';

interface Props {
  onClick: () => void;
}

const SelectedCountry: React.FC<Props> = props => {
  const { onClick } = props;

  const { selectedCountry } = useCountrySelector();

  const selectedCountryWithDefault = {
    name: selectedCountry ? selectedCountry.name : 'No country selected',
    logoUrl: selectedCountry ? selectedCountry.flag : '',
  }

  return (
    <div className="country-selector-selected">
      <Typography component="p" color="primary" fontWeight="bold">{selectedCountry ? 'Selected country' : 'Select a country'}</Typography>

      <ToggleOption className="country-selector-button" {...selectedCountryWithDefault} onClick={onClick}>
        <BsChevronDown size={20} />
      </ToggleOption>
    </div>
  )
}

export default SelectedCountry;