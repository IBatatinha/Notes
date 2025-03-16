import { DinRoundPro } from '@/app/assets/google/fonts/DinRoundPro';
import { HeaderComponents } from '..';
import Link from 'next/link';

export type SignUpProps = {};

export const SignUp = () => {
  return (
    <HeaderComponents.Button asChild title="Sign Up" className="w-[6.4375rem] h-[2.5rem] flex border-[0.125rem] border-b-[0.25rem] border-[#262626] hover:opacity-90 transition-opacity duration-100 rounded-[0.6875rem] items-center justify-center">
      <Link passHref href="/signup">
        <span className={`${DinRoundPro.className} text-[#D1FF86] text-[0.8125rem] whitespace-nowrap font-medium uppercase`}>Sign Up</span>
      </Link>
    </HeaderComponents.Button>
  );
};
