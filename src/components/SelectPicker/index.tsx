import { type PropsWithChildren, useState } from 'react';

import { BsChevronDown } from 'react-icons/bs';

import Typography from '../Typography';

import SelectOption from '../SelectOption';

import './styles.css';

interface Props {
  labelText: string;
  emptyText: string;
  selectedOption?: {
    name: string;
    logoUrl: string;
  };
  onClick: () => void;
}

const SelectPicker: React.FC<PropsWithChildren<Props>> = props => {
  const { selectedOption, labelText, emptyText, children, onClick } = props;

  return (
    <div className="select-picker">
      <div className="select-picker-selected">
        <Typography component="p" color="primary" fontWeight="bold">{labelText}</Typography>

        <SelectOption 
          className="select-picker-button"
          name={selectedOption ? selectedOption.name : emptyText} 
          logoUrl={selectedOption?.logoUrl} 
          onClick={onClick}
        >
          <BsChevronDown size={20} />
        </SelectOption>
      </div>

      {children}
    </div>
  )
}

export default SelectPicker;