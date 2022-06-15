import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from '../pages/Landing.jsx';
import Registration from '../pages/Registration.jsx';
import LogIn from '../pages/LogIn.jsx';
import PasswordRecovery from '../pages/PasswordRecovery.jsx';
import PasswordVerification from '../pages/PasswordVerification.jsx';
import PasswordReset from '../pages/PasswordReset.jsx';
import NotFound from '../pages/NotFound.jsx';

import ConversationPage from '../pages/ConversationPage.jsx';
import { SharedProvider } from '../contexts/SharedContext.jsx';

const RoutesComponent = () => {
  return (
    <main>
      {/*<SharedProvider>*/}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/conversations" element={<ConversationPage />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route
            path="/password-verification"
            element={<PasswordVerification />}
          />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/*</SharedProvider>*/}
    </main>
  );
};

export default RoutesComponent;
