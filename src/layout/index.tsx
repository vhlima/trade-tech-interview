import { type HTMLAttributes, type PropsWithChildren } from "react";

import './styles.css';

type Props = HTMLAttributes<HTMLDivElement>;

const Layout: React.FC<PropsWithChildren<Props>> = props => {
  const { className, children, ...rest } = props;

  const classNameFormatted = className ? ` ${className}` : ''

  return (
    <div className={`layout${classNameFormatted}`} {...rest}>
      {children}
    </div>
  )
}

export default Layout;