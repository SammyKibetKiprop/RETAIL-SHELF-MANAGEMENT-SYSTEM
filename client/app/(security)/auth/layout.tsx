import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stock Tracker | Auth',
  description: 'Stock tracker IOT project management interface',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-screen h-screen grid place-items-center bg-gradient-to-br from-slate-900 from-10% via-slate-700 via-50% to-slate-500 to-100% text-center'>
      {children}
    </div>
  );
}
