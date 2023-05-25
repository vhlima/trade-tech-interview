import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

import clsx from 'clsx';

import Typography from '../Typography';

import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  logoUrl?: string;
  isSelected?: boolean;
}

const SelectOption: React.FC<PropsWithChildren<Props>> = props => {
  const { className, name, logoUrl, isSelected, children,...rest } = props;

  return (
    <button className={clsx('select-option-button', {
      selected: isSelected,
    }, className && className)} type="button" {...rest}>
      {logoUrl && <img className="select-option-logo" src={logoUrl} alt={name} />}
      <Typography component="span" color={!isSelected ? 'secondary' : 'tertiary'}>{name}</Typography>
      {children}
    </button>
  )
}

export default SelectOption;