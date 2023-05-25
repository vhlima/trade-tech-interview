import Typography from "../../../../components/Typography";

import { useSession } from "../../../../hooks/useSession";

const MyTeamHeader: React.FC = () => {
  const { session } = useSession();

  return (
    <div>
      <Typography component="h1" color="primary">Welcome, {session?.email}!</Typography>
      <Typography component="p">
        Please select your country and league to begin your search.
      </Typography>
    </div>
  )
}

export default MyTeamHeader;