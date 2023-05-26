import { useState } from 'react';

import { useSelectors } from '../../hooks/useSelectors';

import SelectPicker from '../../../../components/SelectPicker';

import LeagueSelect from './components/LeagueSelect';

const LeagueSelector: React.FC = () => {
  const { selectedLeague, leaguesQuery } = useSelectors();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = async () => {
    leaguesQuery.fetch();
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