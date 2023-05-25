import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

import clsx from 'clsx';

import Typography from '../../../../../../components/Typography';

import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  flagUrl?: string;
  isSelected?: boolean;
}

const CountryButton: React.FC<PropsWithChildren<Props>> = props => {
  const { name, flagUrl, isSelected, children,...rest } = props;

  return (
    <button className={clsx('country-button', {
      selected: isSelected,
    })} type="button" {...rest}>
      {flagUrl && <img className="country-button-flag" src={flagUrl} alt={name} />}
      <Typography component="span" color={!isSelected ? 'secondary' : 'tertiary'}>{name}</Typography>
      {children}
    </button>
  )
}

export default CountryButton;