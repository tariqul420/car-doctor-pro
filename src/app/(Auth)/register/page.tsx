import Image from 'next/image';
import RegisterForm from './components/RegisterForm';

export default function Register() {
  return (
    <div className="container mx-auto my-20 flex gap-8 items-center max-h-screen">
      <div>
        <Image src={`/assets/images/login/login.svg`} alt="Register img" width={600} height={400} />
      </div>
      <div className="w-1/3 p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
