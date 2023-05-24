import { BiFootball } from 'react-icons/bi';

import './styles.css';

const SignInHeader: React.FC = () => {
  return (
    <div className="signin-header">
      <BiFootball size={60} />
      <h1>Sign in to your account</h1>
      <p>Ensure you have an account at api-football before attempting to sign in.</p>
    </div>
  )
}

export default SignInHeader;