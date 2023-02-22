import { useContext, useEffect, useState } from 'react';

import { LoginContext } from '../components/login-context/LoginContext';
import PageContent from '../components/PageContent';
import { STATUS } from '../components/login-context/constants';

const HomePage = () => {

  const { authSession, authDispatch } = useContext(LoginContext);
  const name = authSession && authSession.name;

  const [, setAuthStatus] = useState({});

  useEffect(() => {
    const getStatus = () => {
      authDispatch({
        type: STATUS
      });
    }
    setAuthStatus(getStatus());
  }, [authDispatch]);



  //TODO: more efficient process to unpack name data and check for its existence
  return (
    <PageContent name={name !== null && name !== 'null' && name !== 'undefined' && name !== undefined && name.length > 0 ? name : 'guest'} title="Welcome!">
      <p>Check out our blog posts</p>
    </PageContent>
  );
}

export default HomePage;
