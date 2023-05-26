import { type PropsWithChildren } from 'react';

import SelectOption from '../SelectOption';

import './styles.css';

type Option = {
  name: string;
  logoUrl?: string;
}

interface Props  {
  selectedOptionId?: string;
  options: Option[];
  onChange: (optionId: string) => void;
}

const Select: React.FC<PropsWithChildren<Props>> = props => {
  const { selectedOptionId, options, onChange } = props;

  return (
    <ul className="select-option-list">
      {options.map(option => (
        <li key={`option-${option.name}`}>
          <SelectOption isSelected={option.name === selectedOptionId} {...option} onClick={() => onChange(option.name)} />
        </li>
      ))}
    </ul>
  )
}

export default Select;