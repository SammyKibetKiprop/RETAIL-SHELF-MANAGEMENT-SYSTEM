// 'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiLadder } from 'react-icons/pi';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { TbReportMoney, TbAdjustmentsDollar } from 'react-icons/tb';

const menuLinks = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard />,
    link: '/',
  },
  {
    name: 'Manage Shelf',
    icon: <PiLadder />,
    link: '/shelf',
  },
  {
    name: 'Add Shelf',
    icon: <HiOutlineViewGridAdd />,
    link: '/shelf/new',
  },
  {
    name: 'Manage Product',
    icon: <TbAdjustmentsDollar />,
    link: '/product',
  },
  {
    name: 'Total Sales',
    icon: <TbReportMoney />,
    link: '/sales',
  },
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-[10vh] md:bottom-0 left-8 z-20 rounded-md md:rounded-none md:left-0 h-fit md:h-[90vh] w-48 md:w-[25vw] lg:w-[20vw] bg-white shadow-lg md:transform-none ${
        isOpen ? 'transform-none' : 'scale-0'
      } transition-transform duration-400 ease-in-out overflow-hidden origin-top-left`}
    >
      <div className='flex items-center justify-between'>
        <button className='text-black focus:outline-none'></button>
      </div>
      <nav>
        <ul className='space-y-2 w-full'>
          {menuLinks.map((link, index) => (
            <Link href={link.link} key={index}>
              <li
                className={`flex items-center justify-start p-4 md:p-5 ${
                  pathname === link.link
                    ? 'bg-slate-700 text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <span className='md:text-lg lg:text-xl xl:text-2xl'>
                  {link.icon}
                </span>
                <span className='ml-2 text-sm md:text-md'>
                  {link.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
