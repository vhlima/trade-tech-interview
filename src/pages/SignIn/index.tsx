import Layout from "../../layout";

import SignInHeader from './components/Header';

import './styles.css';

const SignInPage: React.FC = () => {
  return (
    <Layout className="signin-page">
      <div className="signin-container">
        <SignInHeader />
      </div>
    </Layout>
  )
}

export default SignInPage;