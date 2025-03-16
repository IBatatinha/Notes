import Link from 'next/link';
import { HeaderComponents } from '..';
import { DinRoundPro } from '@/app/assets/google/fonts/DinRoundPro';

export type LogoProps = {};

export const Logo = () => {
  return (
    <HeaderComponents.Button asChild title="Notes Logo">
      <Link passHref href="/" className="hover:brightness-125 transition-all duration-100">
        <h1 className={`${DinRoundPro.className} leading-normal font-bold text-[2.2rem] text-center text-[#D1FF86]`}>N</h1>
      </Link>
    </HeaderComponents.Button>
  );
};
