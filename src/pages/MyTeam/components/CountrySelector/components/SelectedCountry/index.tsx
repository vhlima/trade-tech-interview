import { BsChevronDown } from 'react-icons/bs';

import { useCountrySelector } from '../../../../hooks/useCountrySelector';

import Typography from '../../../../../../components/Typography';

import CountryButton from '../CountryButton';

import './styles.css';

interface Props {
  onClick: () => void;
}

const SelectedCountry: React.FC<Props> = props => {
  const { onClick } = props;

  const { selectedCountry } = useCountrySelector();

  const selectedCountryWithDefault = {
    name: selectedCountry ? selectedCountry.name : 'No country selected',
    flagUrl: selectedCountry ? selectedCountry.flag : '',
  }

  return (
    <div className="country-selector-selected">
      <Typography component="p" color="primary" fontWeight="bold">{selectedCountry ? 'Selected country' : 'Select a country'}</Typography>

      <CountryButton {...selectedCountryWithDefault} onClick={onClick}>
        <BsChevronDown size={20} />
      </CountryButton>
    </div>
  )
}

export default SelectedCountry;