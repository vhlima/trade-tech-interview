import { PropsWithChildren, type ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'primary';
  fullWidth?: boolean;
}

const Button: React.FC<PropsWithChildren<Props>> = props => {
  const { intent = 'primary', fullWidth, className, children, ...rest } = props;

  return (
    <button type="button" className={clsx('button', intent, 
      {
        fullWidth,
      }, 
      className && className)} {...rest}>
      {children}
    </button>
  )
}

export default Button;