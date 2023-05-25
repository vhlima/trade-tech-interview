import Card from "../../components/Card";
import Layout from "../../layout";

import SignInForm from "./components/Form";
import SignInHeader from './components/Header';

import './styles.css';

const SignInPage: React.FC = () => {

  return (
    <Layout className="signin-page">
      <Card>
        <SignInHeader />
        <SignInForm />
      </Card>
    </Layout>
  )
}

export default SignInPage;