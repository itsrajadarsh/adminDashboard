import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // Import auth from your firebase config

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import DefaultLayout from './layout/DefaultLayout';
import UsersPage from './pages/UsersPage';
import UnderDevelopment from './pages/UnderDevelopment';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);  // Track the authenticated user
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Check user authentication on page load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the user if authenticated
      } else {
        setUser(null); // Set null if not authenticated
      }
      setLoading(false); // Stop loading after the user state is checked
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  // Redirect to sign-in if the user is not authenticated and trying to access restricted routes
  useEffect(() => {
    if (!user && pathname !== '/auth/signin' && pathname !== '/auth/signup') {
      navigate('/auth/signin');  // Redirect to signin if not authenticated
    }
  }, [user, pathname, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Admin Dashboard" />
              <UsersPage />
            </>
          }
        />
        <Route
          path="/test"
          element={
            <>
              <PageTitle title="Under Development" />
              <UnderDevelopment />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
