import Image from 'next/image';
import LoginForm from './components/LoginForm';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="container mx-auto my-20 flex gap-8 items-center">
      <div>
        <Image src={`/assets/images/login/login.svg`} alt="Login img" width={600} height={400} />
      </div>
      <div className="w-1/3 p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm />

        {/* Forgot Password & Register Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <p className="mt-2 text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href={'/register'} className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
