import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-4 mx-4 md:mx-22 lg:mx-52 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {categoryList.length > 0 ? (
        categoryList.map((category, index) => (
          <Link
            href={'/search/' + category.name}
            key={index}
            className="flex flex-col items-center justify-center gap-3 bg-purple-50 p-5 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            <Image
              src={category.icon.url}
              alt={`${category.name} icon`}
              width={40}
              height={40}
              className="drop-shadow-md"
            />
            <h2 className="text-primary font-medium text-center">{category.name}</h2>
          </Link>
        ))
      ) : (
        Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[120px] w-full bg-slate-200 rounded-lg animate-pulse"
          ></div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
