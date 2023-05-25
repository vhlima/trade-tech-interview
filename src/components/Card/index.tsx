import { type PropsWithChildren } from 'react';

import './styles.css';

const Card: React.FC<PropsWithChildren> = props => {
  const { children } = props;
  
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default Card;