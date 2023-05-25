import Card from "../../components/Card";

import Layout from "../../layout";

import { CountrySelectorProvider } from "./hooks/useCountrySelector";

import MyTeamHeader from "./components/Header";
import CountrySelector from "./components/CountrySelector";


import './styles.css';

const MyTeamPage: React.FC = () => {
  return (
    <Layout className="myteam-page">
      <Card>
        <CountrySelectorProvider>
          <MyTeamHeader />

          <CountrySelector />
        </CountrySelectorProvider>
      </Card>
    </Layout>
  )
}

export default MyTeamPage;