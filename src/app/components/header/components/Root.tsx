import type { ComponentProps } from 'react';

export interface RootProps extends ComponentProps<'header'> {}

export const Root = (props: RootProps) => {
  return <header className="flex flex-row items-center justify-between mx-[3.75rem] mt-[2.125rem] max-md:mx-[2rem]" {...props} />;
};
