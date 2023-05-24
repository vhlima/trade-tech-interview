import React, { PropsWithChildren } from 'react';

import Layout from './layout';

const App: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <Layout>
      {children}    
    </Layout>
  );
}

export default App;
