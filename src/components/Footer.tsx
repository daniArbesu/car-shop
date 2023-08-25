import { footerLinks } from '@/constants';
import { Logo } from './ui/Icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-black-100 mt-5 flex flex-col border-t border-gray-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Logo />
          <p className="text-base text-gray-700">
            CarHub 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="footer__link">
              <h3 className="font-bold">{title}</h3>
              {links.map(({ title, url }) => (
                <Link key={title} href={url} className="text-gray-500">
                  {title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2023 Carhub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
