import { ReactNode } from 'react';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import logo from '../../public/icons/logo.svg';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const loggedIn = { firstName: 'Juan', lastName: 'Linares' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={logo} width={30} height={30} alt="menu" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
