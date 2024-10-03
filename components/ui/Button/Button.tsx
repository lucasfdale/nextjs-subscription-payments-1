'use client';

import cn from 'classnames';
import React, { forwardRef, useRef, ButtonHTMLAttributes } from 'react';
import { mergeRefs } from 'react-merge-refs';

import LoadingDots from '@/components/ui/LoadingDots';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'slim' | 'flat';
  active?: boolean;
  width?: number;
  loading?: boolean;
  Component?: string | React.ComponentType<any>;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props;
  const ref = useRef<HTMLButtonElement>(null);

  const rootClassName = cn(
    'bg-white text-zinc-800 cursor-pointer inline-flex px-10 rounded-sm leading-6 transition ease-in-out duration-150 shadow-sm font-semibold text-center justify-center uppercase py-4 border border-transparent items-center',
    {
      'bg-zinc-600': active,
      'bg-zinc-700 text-zinc-500 border-zinc-600 cursor-not-allowed': loading,
      'py-2 transform-none normal-case': variant === 'slim',
      'text-zinc-400 border-zinc-600 bg-zinc-700 cursor-not-allowed hover:bg-zinc-700 hover:text-zinc-400':
        disabled
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={buttonRef || ref}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style
      }}
      {...rest}
    >
      {loading ? (
        <i className="m-0 flex">
          <LoadingDots />
        </i>
      ) : (
        children
      )}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
