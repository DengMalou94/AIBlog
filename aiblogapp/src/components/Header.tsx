"use client";
import React, { useState, useEffect } from 'react'; // Combine React with hooks
import Link from "next/link"; // Import Link from Next.js
import { createClient } from '@supabase/supabase-js'; // Supabase client
import type { User } from '@supabase/supabase-js'; // User type

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [admin, setAdmin] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient(
        'https://xiumlvdpnajuozyzgimx.supabase.co', // Replace with your Supabase URL
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdW1sdmRwbmFqdW96eXpnaW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MjA5MzQsImV4cCI6MjA0ODA5NjkzNH0.agO_NYph82eE9BM61v-cTvmqj3-6O7dj1fqlCQDdP5E' // Replace with your Supabase anon key
      );

      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        console.log('No User');
      } else {
        setUser(data.user);
      }

      const userEmail = 'email@example.com'; // Replace with admin email

      if (!data?.user || data.user?.email !== userEmail) {
        console.log('No Admin');
      } else {
        setAdmin(data.user);
      }
    }

    getUser();
  }, []);

  return (
    <header>
      {user ? <p>User: {user.email}</p> : <p>No User Logged In</p>}
      {admin ? <p>Admin: {admin.email}</p> : <p>No Admin Logged In</p>}
    </header>
  );
};

export default Header;

  
        <>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-800 border-b
border-gray-200 text-sm py-3 sm:py-0 ">
    
    <nav
    className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px- 6 lg:px-8"
aria-label="Global">
    <div className="flex items-center justify-between">
        <Link 
        className="flex-none text-xl text-white font-semibold"
        href="/"
aria-label="Brand">
    AIBlog
        </Link>
    </div>
    <div id="navbar-collapse-with-animation" className="">
        <div  className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <Link
            className="flex items-center font-medium text-gray-500 border-2 border-indigo-600 text-center p-2
            rounded-md hover:text-blue-600 sm:border-s sm:my-6 " href="/createpost">
            Create Post
            </Link>
            <form action={""}>
                <button
                className="flex items-center font-medium text-gray-500 border-2 border-indigo-600 text-center p- 2 rounded-md hover:text-blue-600 sm:border-s sm:my-6 "
                type="submit">
                    Logout
                </button>
            </form>
        </div>
    </div>
    </nav>


        </header>
        </>



