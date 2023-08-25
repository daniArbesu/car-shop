import Link from 'next/link';
import { Logo } from './ui/Icons';
import Button from './ui/Button';

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 sm:px-16">
        <Link href="/" className="flex items-center justify-center">
          <Logo />
        </Link>
        <Button
          label="Sign In"
          type="button"
          className="text-primary-blue min-w-[130px] rounded-full bg-white"
        />
      </nav>
    </header>
  );
};

export default Navbar;
