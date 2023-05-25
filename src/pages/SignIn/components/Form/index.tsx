import { type FormEvent, type HTMLAttributes, useState } from 'react';

import Button from '../../../../components/Button';

import { useSession } from '../../../../hooks/useSession';

import { useErrorHandler } from '../../../../hooks/useErrorHandler';

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
        <p className="form-error">{errorMessage}</p>
      )}

      <div className="signin-input-container">
        <label htmlFor="accessToken">Access token</label>
        <input id="accessToken" value={accessToken} onChange={e => setAccessToken(e.target.value)} data-testid="access-token-input" />

        <small>You can retrieve the access token from your api-football account.</small>
      </div>

      <Button type="submit" disabled={!accessToken}>
        Sign in
      </Button>
    </form>
  )
}

export default SignInForm;