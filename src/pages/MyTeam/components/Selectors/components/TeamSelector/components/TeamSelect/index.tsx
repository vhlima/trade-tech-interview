import Select from "../../../../../../../../components/Select";
import Typography from "../../../../../../../../components/Typography";

import { useSelectors } from "../../../../../../hooks/useSelectors";

interface Props {
  onClick: () => void;
}

const TeamSelect: React.FC<Props> = props => {
  const { onClick } = props;

  const { teamsQuery, selectedTeam, changeSelectedTeam } = useSelectors();

  const handleChange = (optionId: string) => {
    changeSelectedTeam(optionId);
    onClick();
  }

  const { data, error, isLoading } = teamsQuery;

  if(isLoading) {
    return <Typography component="p">Loading...</Typography>;
  }

  if(error) {
    return <Typography component="p" color="error">{error}</Typography>;
  }

  const teamOptions = 
    (data || []).map(league => ({ name: league.name, logoUrl: league.logo }));

  return (
    <Select 
      selectedOptionId={selectedTeam?.name} 
      options={teamOptions} 
      onChange={handleChange} 
    />
  )
}

export default TeamSelect;