import { DinRoundPro } from '@/app/assets/google/fonts/DinRoundPro';
import { HeaderComponents } from '@/app/components/header';
import Header from '@/app/components/header/layout';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  return (
    <>
      <Header />
      <section className="w-full h-full flex items-center justify-center">
        <div className="w-[23.25rem] flex flex-col gap-4 items-center mx-10">
          <h2 className={`${DinRoundPro.className} text-[1.75rem] text-white font-bold leading-normal mb-4`}>Log in</h2>
          <form className={`${DinRoundPro.className} w-full flex flex-col gap-4`}>
            <input type="text" placeholder="E-mail or username" spellCheck="false" className="h-[2.5625rem] bg-[#161616] px-[0.9375rem] py-[0.625rem] outline-0 rounded-[0.625rem] border border-[#ffffff1d] placeholder:text-[#565656] placeholder:font-bold font-medium" />
            <input type="password" placeholder="Password" className="h-[2.5625rem] bg-[#161616] px-[0.9375rem] py-[0.625rem] outline-0 rounded-[0.625rem] border border-[#ffffff1d] placeholder:text-[#565656] placeholder:font-bold font-medium" />
            <button className="h-[45px] uppercase font-bold text-[#232121] text-[0.9375rem] cursor-pointer hover:brightness-90 transition-all duration-100 bg-[#D1FF86] border-b-[0.1875rem] border-b-[#AED470] rounded-[0.875rem]">log in</button>
          </form>
          <div className="w-full flex flex-row gap-[0.3125rem] items-center">
            <div className="w-[10.625rem] h-[0.1875rem] bg-[#343434] rounded-[0.125rem]" />
            <span className="uppercase text-[#343434] text-base font-bold">or</span>
            <div className="w-[10.625rem] h-[0.1875rem] bg-[#343434] rounded-[0.125rem]" />
          </div>
          <button title="Google Account" className="w-[10rem] min-h-[2.5rem] select-none flex hover:opacity-90 flex-row gap-[0.1875rem] items-center justify-center rounded-[0.6875rem] border-[0.125rem] border-[#262626] border-b-[0.25rem]">
            <FcGoogle className="w-[1.125rem] h-[1.125rem]" />
            <span className="uppercase font-bold text-[#578DD4] text-[0.8125rem] pb-[1px]">Google</span>
          </button>
          <span className="text-center text-[#959494] text-[0.8125rem] font-bold">
            This site is protected by reCAPTCHA Enterprise and the
            <a href="https://policies.google.com/privacy" target="_blank">
              <u> Google Privacy Policy </u>
            </a>
            and
            <a href="https://policies.google.com/terms" target="_blank">
              <u> Terms of Service</u>
            </a>
             apply.
          </span>
        </div>
      </section>
    </>
  );
}
