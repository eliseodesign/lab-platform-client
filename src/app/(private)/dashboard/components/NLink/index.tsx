"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ReactNode } from 'react';

const normal = "flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100";
const active = "flex items-center px-6 py-4 text-gray-500 bg-gray-700 bg-opacity-25 text-white";

interface NLinkParams {
    text: string
    path: string
    children: ReactNode
}

export const NLink = ({ text, path, children }: NLinkParams) => {
  const pathname = usePathname();
  const here = ("/dashboard" + path).trim()
  const isActive = pathname === here;

  return (
    <Link href={here} className={isActive ? active : normal}>
        <span className='text-[24px] translate-y-[-2.5px]'>{children}</span>
        <span className="mx-3">{text}</span>
      
    </Link>
  );
};