import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthProvider';


export default function ProtectedRoute({ children }) {
  const { user, token } = useAuth();
  console.log(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);

  return <>

    

    {children}
  </>;
}