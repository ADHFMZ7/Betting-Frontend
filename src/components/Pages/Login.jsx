import { useState } from "react";
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { login, token } = useAuth();
  const navigate = useNavigate();

  if (token) {
    navigate('/', { replace: true });
  }

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    try {
      await login(input.username, input.password); 
      navigate('/', { replace: true });
    }
    catch (error) {
      console.log("WRORO")
      setError(error.message);
    }

  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (

    <div className="flex items-center justify-center min-h-screen flex-col">
    <Card className="w-[350px] ">
      <form onSubmit={handleSubmitEvent} className="max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>Welcome Back! Log in to start playing.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleInput}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <p className="text-sm text-gray-700 dark:text-gray-300">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
      </div>
      </CardContent>
      <CardFooter>
      <div className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Login</Button>
      </div>

      </CardFooter>
    </form>

    </Card>

     <p className="text-sm text-gray-700 dark:text-gray-300">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
     {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline"> {error}</span>
                </div>
              )}
    </div>
  );
};

// return (
//   <div className="flex items-center justify-center flex-col">
//   <Card className="w-[350px]">
//       <form>
//     <CardHeader>
//       <CardTitle>Login</CardTitle>
//     </CardHeader>
//     <CardContent>
//         <div className="grid w-full items-center gap-4">
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="name">Username</Label>
//             <input id="username" placeholder="Username" />
//           </div>
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="framework">Password</Label>
//             <input id="password" placeholder="Password" />
//           </div>
//         </div>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button variant="outline">Cancel</Button>
//       <Button type="submit">Login</Button>
//     </CardFooter>
//       </form>

//   </Card>
//     <p className="text-sm text-gray-700 dark:text-gray-300">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
//   </div>
// )
// }

export default Login;