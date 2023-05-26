import { useState } from 'react';

import { useSelectors } from '../../../../hooks/useSelectors';

import SelectPicker from '../../../../../../components/SelectPicker';

import TeamSelect from './components/TeamSelect';

const TeamSelector: React.FC = () => {
  const { selectedTeam,  teamsQuery } = useSelectors();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    teamsQuery.fetch();
    setOpen(previousState => !previousState);
  }

  return (
    <SelectPicker
      labelText="Select a team"
      emptyText="No team selected"
      selectedOption={
        selectedTeam && { name: selectedTeam.name, logoUrl: selectedTeam.logo }
      }
      onClick={handleToggle}
    >
      {isOpen && <TeamSelect onClick={handleToggle} />}
    </SelectPicker>
  )
}

export default TeamSelector;