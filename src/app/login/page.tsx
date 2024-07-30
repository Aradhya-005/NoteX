'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import googleIcon from '../../../public/img/google-brands-solid.svg';
import twitterIcon from '../../../public/img/x-twitter-brands-solid.svg';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast
import { FirebaseError } from 'firebase/app';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize router

  const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        toast.success('Successfully signed in with Google'); // Show success toast
        router.push('/dashboard'); // Redirect to dashboard on successful Google sign-in
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast.error('Unable to sign in with Google. Please try again.'); // User-friendly error message
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful! Redirecting to dashboard...'); // Success message
      setTimeout(() => {
        router.push('/dashboard'); // Redirect to dashboard after a short delay
      }, 2000); // Delay in milliseconds
    } catch (error) {
      console.error('Error signing in with email and password:', error);
      let errorMessage = 'Invalid email or password. Please try again.';
      // Customize error message based on Firebase error codes if necessary
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/user-not-found') {
          errorMessage = 'No account found with this email.';
        } else if (error.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password. Please try again.';
        }
      }
      toast.error(errorMessage); // User-friendly error message
    }
  };

  return (
    <div className="bg-[#0a0a0a] p-8 rounded-md w-[460px] mx-auto text-white border border-[#99999938]">
      <h1 className="text-2xl mb-2 font-semibold">Login to your account</h1>
      <p className="mb-6 text-sm text-[#fffcfca4]">Enter your email and password to log in</p>
      <div className="flex justify-between mb-4">
        <button 
          className="flex items-center justify-center px-11 py-2 rounded-md border border-[#99999938] hover:bg-[#99999938]"
          aria-label="Sign up with Twitter"
        >
          <Image src={twitterIcon} alt="Twitter Icon" width={15} height={15} className="mr-2" /> Twitter
        </button>
        <button 
          onClick={handleGoogle} 
          className="flex items-center justify-center px-11 py-2 rounded-md border border-[#99999938] hover:bg-[#99999938]"
          aria-label="Sign up with Google"
        >
          <Image src={googleIcon} alt="Google Icon" width={15} height={15} className="mr-2" /> Google
        </button>
      </div>
      <div className="relative text-center mb-4">
        <span className="bg-[#0a0a0a] px-2 text-xs text-[#fffcfc8f] relative z-10">OR CONTINUE WITH</span>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#99999938]"></div>
        </div>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col">
        <label htmlFor="email" className="mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="m@example.com" 
          className="p-2 mb-4 bg-[#0a0a0a] rounded-md border border-[#99999938]" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-help"
        />
        <label htmlFor="password" className="mb-1">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className="p-2 mb-4 bg-[#0a0a0a] rounded-md border border-[#99999938]" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="password-help"
        />
        <button type="submit" className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#edebebfc]">Login</button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to display toasts */}
    </div>
  );
};

export default LoginPage;
