import { HeaderComponents } from '..';

export type HeaderProps = {
  loading?: boolean;
};

export default function Header({ loading }: HeaderProps) {
  return (
    <HeaderComponents.Root>
      <HeaderComponents.Logo />
      <div className="w-full flex flex-row-reverse gap-2">
        <HeaderComponents.SignUp />
      </div>
    </HeaderComponents.Root>
  );
}
