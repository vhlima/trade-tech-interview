import Select from "../../../../../../../../components/Select";
import Typography from "../../../../../../../../components/Typography";

import { useSelectors } from "../../../../../../hooks/useSelectors";

interface Props {
  onClick: () => void;
}

const LeagueSelect: React.FC<Props> = props => {
  const { onClick } = props;

  const { leaguesQuery, selectedLeague, changeSelectedLeague } = useSelectors();

  const handleChange = (optionId: string) => {
    changeSelectedLeague(optionId);
    onClick();
  }

  const { data, error, isLoading } = leaguesQuery;

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