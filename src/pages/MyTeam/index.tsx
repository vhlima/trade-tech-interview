import Card from "../../components/Card";

import Layout from "../../layout";

import { CountrySelectorProvider } from "./hooks/useCountrySelector";

import MyTeamHeader from "./components/Header";

import CountrySelector from "./components/CountrySelector";
import LeagueSelector from "./components/LeagueSelector";

import './styles.css';
import { LeagueSelectorProvider } from "./hooks/useLeagueSelector";

const MyTeamPage: React.FC = () => {
  return (
    <Layout className="myteam-page">
      <Card>
        <CountrySelectorProvider>
          <LeagueSelectorProvider>
            <MyTeamHeader />

            <CountrySelector />

            <LeagueSelector />
          </LeagueSelectorProvider>
        </CountrySelectorProvider>
      </Card>
    </Layout>
  )
}

export default MyTeamPage;