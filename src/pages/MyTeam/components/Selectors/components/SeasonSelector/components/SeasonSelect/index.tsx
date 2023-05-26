import Select from "../../../../../../../../components/Select";
import Typography from "../../../../../../../../components/Typography";

import { useSelectors } from "../../../../../../hooks/useSelectors";

interface Props {
  onClick: () => void;
}

const SeasonSelect: React.FC<Props> = props => {
  const { onClick } = props;

  const { seasonsQuery, selectedSeason, changeSelectedSeason } = useSelectors();

  const handleChange = (optionId: string) => {
    changeSelectedSeason(optionId);
    onClick();
  }

  const { data, error, isLoading } = seasonsQuery;

  if(isLoading) {
    return <Typography component="p">Loading...</Typography>;
  }

  if(error) {
    return <Typography component="p" color="error">{error}</Typography>;
  }

  const seasonOptions = 
    (data || []).map(season => ({ name: String(season) }));

  return (
    <Select 
      selectedOptionId={String(selectedSeason)} 
      options={seasonOptions} 
      onChange={handleChange} 
    />
  )
}

export default SeasonSelect;