import { Button } from 'keep-react';
import Image from 'next/image';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = ({ activePath }: { activePath: string }) => {
  const linkStyle = 'hover:text-[rgb(255,56,17)] transition-all duration-300 cursor-pointer capitalize';

  const activeStyle = 'text-[rgb(255,56,17)] before:w-full';

  return (
    <nav className="flex items-center justify-between w-full relative bg-white container rounded-full mx-auto px-[10px] py-[8px]">
      {/* logo */}
      <Image src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" width={55} height={55} />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li>
          <Link href="/" className={activePath === '/' ? activeStyle : linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/features" className={`${linkStyle} ${activePath === '/features' ? activeStyle : ''}`}>
            Features
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={`${linkStyle} ${activePath === '/blogs' ? activeStyle : ''}`}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/shop" className={`${linkStyle} ${activePath === '/shop' ? activeStyle : ''}`}>
            Shop
          </Link>
        </li>
      </ul>

      {/* action buttons */}
      <div className="items-center gap-[10px] flex">
        <Button color="secondary">Appointment</Button>

        <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer md:hidden flex" />
      </div>
    </nav>
  );
};

export default Navbar;
