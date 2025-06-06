import React from 'react';
import clsx from 'clsx';
import css from './layout.module.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={clsx('flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-5', css.root)}>
      {children}
    </main>
  );
}
