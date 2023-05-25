import Layout from "../../layout";

import SignInForm from "./components/Form";
import SignInHeader from './components/Header';

import './styles.css';

const SignInPage: React.FC = () => {

  return (
    <Layout className="signin-page">
      <div className="signin-container">
        <SignInHeader />
        <SignInForm />
      </div>
    </Layout>
  )
}

export default SignInPage;