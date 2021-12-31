import Image from 'next/image'

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
const Header = () => {
  return (
    <div className="shadow-sm border-b z-50 bg-white sticky top-0">
      {/* Left */}

      <div className="flex justify-between max-w-6xl cursor-pointer mx-5 lg:mx-auto">
        <div className="hidden md:inline-grid lg:inline-grid relative w-24">
          <Image
            priority
            src={'https://links.papareact.com/ocw'}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 md:hidden lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src={'https://links.papareact.com/jjm'}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          {/* middel */}
          <div className="mt-1 relative rounded-md p-3">
            <div className="absolute inset-y-0 pl-3 flex pointer-events-none items-center">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <input
                className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBarButton " />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <PlusCircleIcon className="navBarButton " />
          <div className="relative navBarButton">
            <PaperAirplaneIcon className="navBarButton rotate-45 " />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce text-white">
              3
            </div>
          </div>
          <UserGroupIcon className="navBarButton" />
          <HeartIcon className="navBarButton" />
          <img
            src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
            alt="profile-pic"
            className="h-10 w-10 cursor-pointer  rounded-full"
          />
        </div>{' '}
        {/* right */}
      </div>
    </div>
  )
}

export default Header
