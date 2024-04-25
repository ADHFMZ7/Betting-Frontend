import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import NotFound from './NotFound.jsx'
import Profile from './Pages/Profile.jsx'
import Index from './Pages/Index.jsx'
import Games from './Pages/Games.jsx'

import ThemeProvider from "./ThemeProvider.jsx"
import { ModeToggle } from './ModeToggle.jsx'

import AuthProvider from './AuthProvider.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Navbar.jsx'


// const router = createBrowserRouter([
//   {
//     id: "root",
//     path: "/",
//     loader() {
//       // Our root route always provides the user, if logged in
//       return { user: fakeAuthProvider.username };
//     },
//     Component: Layout,
//     children: [
//       {
//         index: true,
//         Component: PublicPage,
//       },
//       {
//         path: "/login",
//         action: loginAction,
//         loader: loginLoader,
//         Component: LoginPage,
//       },
//       {
//         path: "protected",
//         loader: protectedLoader,
//         Component: ProtectedPage,
//       },
//     ],
//   },
//   {
//     path: "/logout",
//     async action() {
//       // We signout in a "resource route" that we can hit from a fetcher.Form
//       await fakeAuthProvider.signout();
//       return redirect("/");
//     },
//   },
// ]);

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
}
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
