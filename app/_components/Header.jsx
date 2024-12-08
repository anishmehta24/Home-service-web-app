'use client';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

function Header() {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-5 shadow-sm flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={80} height={80} className="cursor-pointer" />
        <div className="md:flex items-center gap-6 hidden">
          {['Home', 'Services', 'About Us'].map((item, index) => (
            <h2
              key={index}
              className="hover:scale-110 transition-transform hover:text-primary cursor-pointer text-lg"
            >
              <Link href={item === 'Home' ? '/' : item === 'Services' ? '/search/Cleaning' : '/aboutus'}>
                {item}
              </Link>
            </h2>
          ))}
        </div>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full hover:scale-110 transition-transform"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/myBookings">My Bookings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn('descope')} className="rounded-full px-6 py-2 text-lg">
            Login / Sign Up
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
