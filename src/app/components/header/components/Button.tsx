import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  asChild?: boolean;
}

export const Button = ({ asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button';
  return <Component className="select-none cursor-pointer" {...props} />;
};
