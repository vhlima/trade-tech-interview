import Card from "../../components/Card";

import Layout from "../../layout";

import { SelectorsProvider } from "./hooks/useSelectors";

import MyTeamHeader from "./components/Header";
import Selectors from "./components/Selectors";

import './styles.css';

const MyTeamPage: React.FC = () => {
  return (
    <Layout className="myteam-page">
      <Card>
        <MyTeamHeader />


        <SelectorsProvider>
          <Selectors />
        </SelectorsProvider>
      </Card>
    </Layout>
  )
}

export default MyTeamPage;