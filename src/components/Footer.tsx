import React from 'react';
import Icon from '@/common/icons';
import Link from 'next/link';
import { Flame } from 'lucide-react';

const Footer = () => {
  interface Footer {
    title: string;
    href: string;
    target?: string;
  }
  const footer_config: {
    header?: string;
    logo?: React.ReactNode;
    content: Footer[];
  }[] = [
    {
      logo: (
        <Link href="/">
            <Flame
              type="logo"
              size={100} // Adjusted size for mobile
              height={40} // Adjusted height for mobile
              color="#ff233d"
              className=" md:me-5 bg-transparent-0" // Adjusted margin for mobile
            />
          </Link>
          
      ),
      content: [
        {
          title: 'Company History',
          href: '/company-history',
        },
        {
          title: 'About Us',
          href: '/about',
        },
        {
          title: 'Our Vision',
          href: '/our-vision',
        },
        {
          title: 'Our Team',
          href: '/our-team',
        },
        {
          title: 'Press Release',
          href: '/press',
        },
      ],
    },
    {
      header: 'Services',
      content: [
        {
          title: 'Alert & Warnings',
          href: '/',
        },
        {
          title: 'Live Fire Location',
          href: '/',
        },
        {
          title: 'Possible Firing Areas',
          href: '/',
        },
        {
          title: 'Educational Content',
          href: '/',
        },
      ],
    },

    {
      header: 'Legal',
      content: [
        {
          title: 'Privacy Policy',
          href: '/privacy-policy',
        },
        {
          title: 'Terms & Conditions',
          href: '/terms',
        },
        {
          title: 'Cookie Policy',
          href: '/cookie-policy',
        },
        {
          title: 'Disclaimer',
          href: '/disclaimer',
        },
        {
          title: 'Refund Policy',
          href: '/refund-policy',
        }
      ],
    },

    {
      header: 'Social Links',
      content: [
        {
          title: 'Facebook',
          href: 'https://facebook.com/schoole',
          target: '_blank',
        },
        {
          title: 'Instagram',
          href: 'https://instagram.com/schoole',
          target: '_blank',
        },

        {
          title: 'LinkedIn',
          href: 'https://linkedin.com/in/schoole',
          target: '_blank',
        },
        {
          title: 'Twitter',
          href: 'https://twitter.com/schoole',
          target: '_blank',
        }
      ],
    },
  ];

  return (
    <>
      <div className="lg:px-8 mt-12 lg:py-5 bg-black">
        <footer className="px-4 py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-36">
            {footer_config.map((config, index) => (
              <div className="mb-8" key={index}>
                <div className="mb-6 text-lg font-semibold text-gray-700">
                  {/* logo and name */}
                  <div className="flex items-center">
                    {config.header ? (
                      <span className="text-white">{config.header}</span>
                    ) : (
                      config.logo
                    )}
                  </div>
                </div>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  {config.content.map((content, index) => (
                    <React.Fragment key={index}>
                      <Link href={content.href} target={content.target}>
                        <li>{content.title}</li>
                      </Link>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
        <p className="text-center text-sm text-gray-700">
          Copyright &copy; 2024 All Right Reserved{' '}
        </p>
      </div>
    </>
  );
};

export default Footer;
