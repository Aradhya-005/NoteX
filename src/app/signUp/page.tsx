

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { signUpWithEmailPassword } from '../../firebase/auth';
import Link from 'next/link';
import googleIcon from "../../../public/img/google-brands-solid.svg";
import twitterIcon from "../../../public/img/x-twitter-brands-solid.svg";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize router

  const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('Successfully signed in with Google');
      router.push('/dashboard'); // Redirect to dashboard on successful Google sign-in
    } catch (error) {
      setError('Error signing in with Google: ' + (error as Error).message);
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUpWithEmailPassword(email, password);
      toast.success('Sign-up successful! Redirecting to dashboard...'); // Show success toast
      setTimeout(() => {
        router.push('/dashboard'); // Redirect to dashboard after a short delay
      }, 2000); // Delay in milliseconds
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please try logging in.');
      } else {
        setError('Error signing up with email and password: ' + (error as Error).message);
      }
      console.error('Error signing up with email and password:', error);
    }
  };

  return (
    <div className="bg-[#0a0a0a] p-8 rounded-md w-[460px] mx-auto text-white border border-[#99999938]">
      <h1 className="text-2xl mb-2 font-semibold">Create an account</h1>
      <p className="mb-6 text-sm text-[#fffcfca4]">Enter your email below to create your account</p>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <div className="flex justify-between mb-4">
        <button className="flex items-center justify-center px-11 py-2 rounded-md border border-[#99999938] hover:bg-[#99999938]">
          <Image src={twitterIcon} alt="Twitter Icon" width={15} height={15} className="mr-2" /> Twitter
        </button>
        <button onClick={handleGoogle} className="flex items-center justify-center px-11 py-2 rounded-md border border-[#99999938] hover:bg-[#99999938]">
          <Image src={googleIcon} alt="Google Icon" width={15} height={15} className="mr-2" /> Google
        </button>
      </div>
      <div className="relative text-center mb-4">
        <span className="bg-[#0a0a0a] px-2 text-xs text-[#fffcfc8f] relative z-10">OR CONTINUE WITH</span>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#99999938]"></div>
        </div>
      </div>
      <form onSubmit={handleSignUp} className="flex flex-col">
        <label htmlFor="email" className="mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="m@example.com" 
          className="p-2 mb-4 bg-[#0a0a0a] rounded-md border border-[#99999938]" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="mb-1">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className="p-2 mb-4 bg-[#0a0a0a] rounded-md border border-[#99999938]" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#edebebfc]">Create account</button>
        <p className='text-[#fffcfc8f] mb-7 mt-4'>Already have an account? <Link href="/login">Sign In</Link></p>
      </form>
      <ToastContainer /> {/* Add ToastContainer to your JSX */}
    </div>
  );
};

export default SignupPage;

