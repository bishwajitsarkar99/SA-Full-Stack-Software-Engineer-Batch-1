import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Secure Your Notes with <span className="text-indigo-600">AuthMaster</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A powerful demonstration of Session and JWT authentication patterns. 
            Learn, build, and secure your MERN stack applications like a pro.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-2xl">
            <ShieldCheck className="text-indigo-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold text-gray-900">Session Auth</h3>
            <p className="mt-2 text-center text-gray-600 text-sm">
              Traditional stateful authentication using secure HTTP-only cookies.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl">
            <Zap className="text-purple-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold text-gray-900">JWT Auth</h3>
            <p className="mt-2 text-center text-gray-600 text-sm">
              Modern stateless authentication using JSON Web Tokens.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl">
            <ShieldCheck className="text-blue-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold text-gray-900">SQLite Backend</h3>
            <p className="mt-2 text-center text-gray-600 text-sm">
              Persistent storage for users and notes using lightweight SQLite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
