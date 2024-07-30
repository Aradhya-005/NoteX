import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-96 ml-32 mt-32">
      <h1
  className="logo font-semibold text-7xl mb-10"
  style={{
    background: 'linear-gradient(90deg,#7974cc, #1bab34)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  }}
>
  NoteX
</h1>
      <h3 className="text-2xl text-[#e3e3e3] font-semibold">
        Boost Your Creativity
      </h3>
      <h3 className="text-2xl text-[#e3e3e3] font-semibold">and Efficiency</h3>
      <p className="mt-5 text-[#b5b5b5] max-w-96 text-base ">
        Engage with NoteX to seamlessly transform your text into beautifully
        handwritten notes, enhancing your writing, planning, learning, and more.
      </p>

      <div className="mt-12">
        <Link href="/signUp" className="bg-indigo-500 rounded-3xl px-6 py-3">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
