import { type InputHTMLAttributes } from 'react';

import Typography from '../../../../../../components/Typography';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  description?: string;
}

const SignInFormInput: React.FC<Props> = props => {
  const { labelText, description, id, ...rest } = props;

  return (
    <div className="signin-input-container">
      <label htmlFor={id}>
        <Typography component="span" color="primary" fontWeight="bold">{labelText}</Typography>
      </label>
      
      <input id={id} {...rest} />

      {description && (
        <Typography component="small">
          {description}
        </Typography>
      )}
    </div>
  );
}

export default SignInFormInput;