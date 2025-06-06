import Link from '@/shared/ui/link/Link';

const Welcome = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Welcome to <span className="bg-sky-500/80 rounded-xl p-2 text-white">Tasks app</span>
      </h1>
      <p className="text-neutral-500">Начните работу с Task Manager.</p>
      <Link href="/login" title="LogIn" />
    </>
  );
};

export default Welcome;
