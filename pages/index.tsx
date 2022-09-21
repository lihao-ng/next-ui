import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Home page</h2>
          
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <Link href="/server-side-props" className="mt-4 block">
            <p className="text-xl font-semibold text-gray-900">Server side Props</p>
          </Link>

          <Link href="/static-paths" className="mt-4 block">
            <p className="text-xl font-semibold text-gray-900">Static Paths</p>
          </Link>

          <Link href="/incremental-static-regeneration" className="mt-4 block">
            <p className="text-xl font-semibold text-gray-900">Incremental Static Regeneration</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
