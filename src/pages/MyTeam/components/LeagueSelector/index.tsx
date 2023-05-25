import { useState } from 'react';

import { useLeagueSelector } from '../../hooks/useLeagueSelector';

import SelectPicker from '../../../../components/SelectPicker';

import LeagueSelect from './components/LeagueSelect';

const LeagueSelector: React.FC = () => {
  const { selectedLeague } = useLeagueSelector();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(previousState => !previousState);
  }

  return (
    <SelectPicker
      labelText="Select a league"
      emptyText="No league selected"
      selectedOption={
        selectedLeague && { name: selectedLeague.name, logoUrl: selectedLeague.logo }
      }
      onClick={handleToggle}
    >
      {isOpen && <LeagueSelect onClick={handleToggle} />}
    </SelectPicker>
  )
}

export default LeagueSelector;