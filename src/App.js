import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import './style.scss'

import LeftBar from './Components/leftBar/LeftBar';
import NavBar from './Components/navBar/NavBar';
import RightBar from './Components/rightBar/RightBar';
import Home from './Pages/home/Home';

import {Login} from './Pages/login/Login'
import Profile from './Pages/profile/Profile';
import Register from './Pages/register/Register';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authenticationContext';

function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)

  // Create common layout 
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{display: 'flex',}}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  // Check if user is logged in
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  // Create routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
