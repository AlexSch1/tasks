import LoginForm from '@/features/auth/login-form/ui/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LogIn',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginForm />;
}
