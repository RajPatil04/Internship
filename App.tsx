import React, { useState } from 'react';
import { CodeEntry } from './components/CodeEntry';
import { VerifiedPage } from './components/VerifiedPage';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleAuthentication = (name: string) => {
    setUserName(name);
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <VerifiedPage userName={userName} />;
  }

  return <CodeEntry onAuthenticated={handleAuthentication} />;
};

export default App;
