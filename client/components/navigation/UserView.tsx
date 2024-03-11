import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { userLogoutHandler } from '@/utils/service';

const UserView = () => {
  const [authModeOpen, setAuthModeOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className='flex items-center space-x-2 cursor-pointer p-2 rounded-md relative'
      onClick={() => setAuthModeOpen((prevState) => !prevState)}
    >
      <div className='text-sm font-medium'>John Doe</div>
      <div className='w-10 h-10 rounded-full bg-gray-300'></div>

      <div
        className={`absolute top-[9vh] right-0 z-20 rounded-b-sm h-fit w-32 bg-white shadow-lg
          ${authModeOpen ? 'transform-none' : 'scale-0'}
          transition-transform duration-400 ease-in-out overflow-hidden origin-top-right`}
      >
        <ul className='space-y-2 w-full text-sm'>
          {/* <li className='px-4 py-2 hover:bg-gray-100'>Profile</li> */}
          {/* <li className='px-4 py-2 md:py-3'>Jane Doe</li> */}
          <li
            className='px-4 py-2 md:py-3 hover:bg-red-100'
            onClick={async () => {
              await userLogoutHandler();
              router.push('/auth');
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserView;
