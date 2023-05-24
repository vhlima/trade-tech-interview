import { PropsWithChildren, type HTMLAttributes } from "react";

import './styles.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  intent?: 'primary';
}

const Button: React.FC<PropsWithChildren<Props>> = props => {
  const { intent = 'primary', className, children, ...rest } = props;

  const classNameFormatted = className ? ` ${className}` : '';

  const buttonIntentClassName = `button ${intent}`;

  return (
    <button type="button" className={`${buttonIntentClassName}${classNameFormatted}`} {...rest}>
      {children}
    </button>
  )
}

export default Button;