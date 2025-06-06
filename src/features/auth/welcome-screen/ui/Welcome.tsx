import clsx from 'clsx';

import css from './Welcome.module.scss';
import Link from '@/shared/ui/link/Link';

const Welcome = () => {
  return (
    <main className={clsx('flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-5', css.root)}>
      <h1 className="text-4xl font-bold">
        Welcome to <span className="bg-sky-500/80 rounded-xl p-2 text-white">Tasks app</span>
      </h1>
      <p className="text-neutral-500">Начните работу с Task Manager.</p>
      <Link href="/sign-up" title="Sign Up" />
    </main>
  );
};

export default Welcome;
