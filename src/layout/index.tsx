import { type HTMLAttributes, type PropsWithChildren } from "react";

import { SessionProvider } from "../hooks/useSession";

import './styles.css';

type Props = HTMLAttributes<HTMLDivElement>;

const Layout: React.FC<PropsWithChildren<Props>> = props => {
  const { className, children, ...rest } = props;

  const classNameFormatted = className ? ` ${className}` : ''

  return (
    <SessionProvider>
      <div className={`layout${classNameFormatted}`} {...rest}>
        {children}
      </div>
    </SessionProvider>
  )
}

export default Layout;