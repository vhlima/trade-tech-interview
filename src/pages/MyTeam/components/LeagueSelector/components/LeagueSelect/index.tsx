import { useLeagueSelector } from "../../../../hooks/useLeagueSelector";

import Select from "../../../../../../components/Select";
import Typography from "../../../../../../components/Typography";

interface Props {
  onClick: () => void;
}

const LeagueSelect: React.FC<Props> = props => {
  const { onClick } = props;

  const { selectedLeague, changeSelectedLeague } = useLeagueSelector();

  const { leaguesResponse } = useLeagueSelector();

  const handleChange = (optionId: string) => {
    changeSelectedLeague(optionId);
    onClick();
  }

  const { data, error, isLoading } = leaguesResponse;

  if(isLoading) {
    return <Typography component="p">Loading...</Typography>;
  }

  if(error) {
    return <Typography component="p" color="error">{error}</Typography>;
  }

  const leagueOptions = 
    (data || []).map(league => ({ name: league.name, logoUrl: league.logo }));

  return (
    <Select 
      selectedOptionId={selectedLeague?.name} 
      options={leagueOptions} 
      onChange={handleChange} 
    />
  )
}

export default LeagueSelect;