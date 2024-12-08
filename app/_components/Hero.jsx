import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-14 pb-7">
      <h2 className="font-bold text-[46px]">
        Find Home <span className="text-primary">Service/Repair</span>  
        <br />Near You
      </h2>
      <h2 className="text-xl text-gray-400">Explore Best Service & Repair Near You</h2>

      <div className="mt-4 flex gap-4 items-center justify-center w-full px-4 md:px-0 max-w-[700px]">
        <Input 
          placeholder="Search for services..." 
          className="rounded-full w-full py-3 px-4 shadow-sm"
        />
        <Button className="rounded-full h-[46px]">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
