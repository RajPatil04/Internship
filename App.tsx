import React, { useState } from 'react';
import { VerifiedBadge } from './components/VerifiedBadge';
import { CodeEntry } from './components/CodeEntry';

const VerifiedPage: React.FC = () => (
  <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
      Verification Status
    </h1>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
      Your account has been successfully verified.
    </p>
    <VerifiedBadge />
    <p className="mt-8 text-2xl font-semibold text-gray-700 dark:text-gray-300">
      Raj Narendra Patil
    </p>
  </main>
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <VerifiedPage />;
  }

  return <CodeEntry onAuthenticated={() => setIsAuthenticated(true)} />;
};

export default App;