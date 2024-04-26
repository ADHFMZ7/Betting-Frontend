import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import NotFound from './Pages/NotFound.jsx'
import Profile from './Pages/Profile.jsx'
import Index from './Pages/Index.jsx'
import Games from './Pages/Games.jsx'
// import Blackjack from './Pages/Games/Blackjack.jsx'
import Roulette from './Pages/Games/Roulette.jsx'
// import Slots from './Pages/Games/Slots.jsx'
import DailySpin from './Pages/Games/DailySpin.jsx'

import ThemeProvider from "./ThemeProvider.jsx"

import AuthProvider from './AuthProvider.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([{
  path: '/',
  element: <Index/>,
  errorElement: <NotFound />,
}, { 
  path: '/login',
  element: <Login/>,
},
{
  path: '/signup',
  element: <Signup />
},
{
  path: '/profile',
  element: <ProtectedRoute>
  <Profile />
</ProtectedRoute>,
},
{
  path: '/games',
  element: <ProtectedRoute>
            <Games />
          </ProtectedRoute>,
    // children: [
    //   // {
    //   //   path: 'poker',
    //   //   element: <Poker />,
    //   // },
    //   // {
    //   //   path: 'blackjack',
    //   //   element: <Blackjack />,
    //   // },
    //   {
    //     path: 'roulette',
    //     element: <Roulette />,
    //   },
  // ],
    },
    {
      path: '/games/roulette',
      element: <ProtectedRoute>
        <Roulette />
      </ProtectedRoute>,
    },
  {
    path: '/games/spin',
    element: <ProtectedRoute>
      <DailySpin />
    </ProtectedRoute>,
  },
])


function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div id="root">
              <AuthProvider>
                <RouterProvider router={router} fallbackElement={<p>Initial Load...</p> }/>
              </AuthProvider>
          </div>
        </ThemeProvider>
    );
  }
  
  export default App;
