import Card from "../../components/Card";

import Layout from "../../layout";

import MyTeamHeader from "./components/Header";

import './styles.css';

const MyTeamPage: React.FC = () => {
  return (
    <Layout className="myteam-page">
      <Card>
        <MyTeamHeader />
      </Card>
    </Layout>
  )
}

export default MyTeamPage;