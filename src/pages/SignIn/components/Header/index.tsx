import { BiFootball } from 'react-icons/bi';

import { Typography } from '../../../../components/Typography';

import './styles.css';

const SignInHeader: React.FC = () => {
  return (
    <div className="signin-header">
      <BiFootball size={60} />
      <Typography component="h1" color="primary">Sign in to your account</Typography>
      <Typography component="p">
        Ensure you have an account at api-football before attempting to sign in.
      </Typography>
    </div>
  )
}

export default SignInHeader;