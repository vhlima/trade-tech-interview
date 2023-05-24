import { PropsWithChildren, type ButtonHTMLAttributes } from "react";

import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
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