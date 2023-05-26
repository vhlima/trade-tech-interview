import { useState } from 'react';

import { useSelectors } from '../../../../hooks/useSelectors';

import SelectPicker from '../../../../../../components/SelectPicker';

import SeasonSelect from './components/SeasonSelect';

const SeasonSelector: React.FC = () => {
  const { selectedSeason, seasonsQuery } = useSelectors();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    seasonsQuery.fetch();
    setOpen(previousState => !previousState);
  }

  return (
    <SelectPicker
      labelText="Select a season (optional)"
      emptyText="No season selected"
      selectedOption={
        selectedSeason ? { name: String(selectedSeason) } : undefined
      }
      onClick={handleToggle}
    >
      {isOpen && <SeasonSelect onClick={handleToggle} />}
    </SelectPicker>
  )
}

export default SeasonSelector;