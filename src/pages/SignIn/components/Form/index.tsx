import { type FormEvent, type HTMLAttributes, useState } from 'react';

import Button from '../../../../components/Button';

import { useSession } from '../../../../hooks/useSession';

import { useErrorHandler } from '../../../../hooks/useErrorHandler';

import Typography from '../../../../components/Typography';

import SignInFormInput from './components/SignInFormInput';

import './styles.css';

type Props = Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'>;

const SignInForm: React.FC<Props> = props => {
  const [accessToken, setAccessToken] = useState<string>('');

  const { signIn } = useSession();

  const { errorMessage, handleError } = useErrorHandler();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn(accessToken);
    }catch(err) {
      handleError(err);
    }
  }

  return (
    <form className="signin-form" onSubmit={handleSubmit} {...props}>
      {errorMessage && (
        <Typography className="form-error" component="p" color="error">{errorMessage}</Typography>
      )}

      <SignInFormInput 
        labelText="Access token"
        description="You can retrieve the access token from your api-football account."
        id="accessToken" 
        value={accessToken} 
        onChange={e => setAccessToken(e.target.value)} 
      />

      <Button type="submit" disabled={!accessToken} fullWidth>
        Sign in
      </Button>
    </form>
  )
}

export default SignInForm;