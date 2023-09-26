import Link from 'next/link';
import React from 'react';

function DashboardHeaders() {
  return (
    <div className="flex h-[80px] w-full justify-between bg-red-700 text-red-500">
      <h1 className="bg-black ">Influence</h1>
      <div>
        <Link href="/" className=" bg-slate-700">
          Home
        </Link>
        <Link href="/profile">My profile</Link>
      </div>
    </div>
  );
}

export default DashboardHeaders;
