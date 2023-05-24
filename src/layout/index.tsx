import { PropsWithChildren } from "react";

import './styles.css';

const Layout: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout;