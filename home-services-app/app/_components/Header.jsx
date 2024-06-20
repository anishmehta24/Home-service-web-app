'use client'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
  

function Header() {

    const {data} = useSession();
    
    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Image src='/logo.png' alt='logo' width={100} height={100} />
                <div className='md:flex items-center gap-6 hidden'>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'><Link href={'/'}>Home</Link></h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'><Link href={'/search/Cleaning'}>Services</Link></h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'><Link href={'/aboutus'}>About Us</Link></h2>
                </div>

            </div>
            <div>
                {data?.user?
                
                <DropdownMenu>
  <DropdownMenuTrigger ><Image src={data?.user?.image} alt='user' width={40} height={40} className='rounded-full'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem > <Link href={'/myBookings'}>My Bookings</Link></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Log Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
:
                <Button onClick={()=>signIn('descope')}>Login / Sign Up</Button>
            }
            
            </div>
           
        </div>
    )
}

export default Header