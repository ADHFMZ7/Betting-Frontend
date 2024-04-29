import React, { useState } from 'react';
import { useAuth } from '../AuthProvider.jsx';
import { parseJwt } from '../../utility.js';
import { useNavigate } from 'react-router-dom';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Link } from "react-router-dom"
import Navbar from '../Navbar.jsx';

const Profile = () => {

    const { logout, token } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState(
        null
    );
    const id = parseJwt(token).id;

    React.useEffect(() => {
        if (token) {
            fetch("http://127.0.0.1:8000/user/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setUser(data);
                });
        }
    }, [token, id]);


    const handleLogout = () => {
        logout(); 
        navigate('/', { replace: true }); 
    };

  return (
    <>
    {(user === null) ? <></> : 
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-500">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Avatar className="h-24 w-24 ring-4 ring-white dark:ring-gray-800">
              <AvatarImage alt="@shadcn" src="https://www.playnow.com/resources/images/live-casino/tiles/live-casino-vip-blackjack-tile.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold">@{user.username}</div>
            <div className="text-indigo-500 font-bold">ID: {user.id}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Username</div>
              <div className="text-gray-800 dark:text-gray-200 font-medium">{user.username}</div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Date of Birth</div>
              <div className="text-gray-800 dark:text-gray-200 font-medium">{user.dob}</div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Current Credits</div>
              <div className="text-gray-800 dark:text-gray-200 font-medium">${user.credits}</div>
            </div>
          </div>
          <Separator />
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Transaction History</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>April 15, 2023</TableCell>
                  <TableCell>Deposit</TableCell>
                  <TableCell>$500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>April 10, 2023</TableCell>
                  <TableCell>Withdrawal</TableCell>
                  <TableCell>-$200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>April 5, 2023</TableCell>
                  <TableCell>Bonus</TableCell>
                  <TableCell>$50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Separator />
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Account Settings</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600" href="#">
                <UserIcon className="h-5 w-5" />
                <span>Edit Profile</span>
              </Link>
              <Link className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600" href="#">
                <LockIcon className="h-5 w-5" />
                <span>Change Password</span>
              </Link>
              <Link className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600" href="#">
                <WalletIcon className="h-5 w-5" />
                <span>Manage Payments</span>
              </Link>
              <Link className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600" href="#">
                <GaugeIcon className="h-5 w-5" />
                <span>Account Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>}
    </>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  )
}

export default Profile;