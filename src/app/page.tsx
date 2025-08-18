'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export default function Home() {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  }

  return (
      <main className={`py-[20px] px-[32px] flex flex-col justify-between box-border h-screen w-full p-6 rounded-[32px] transition-colors duration-500
        ${isDark
          ? "bg-gradient-to-b from-[#121212] to-[#3a3a3a]"
          : "bg-gradient-to-b from-[#C5A9EE] to-[#E5E5E5]"
        }`}
      >
        < Header onToggleTheme={toggleTheme} />
        <section className="hero flex justify-around items-center">
          <div>
            <h1 className="sr-only">My CV - Frontend Developer</h1>
            <p className="uppercase text-[var(--color-font-primary)] font-[300] paragraph tracking-[-0.1em]">Hello,</p>
            <p className="uppercase text-[var(--color-font-primary)] font-[900] tracking-[-0.1em] paragraph">I&apos;<span className="italic">m</span> Inna |</p>
            <p className="uppercase text-[var(--color-font-primary)] font-[400] tracking-[-0.1em] paragraph">Frontend -</p>
            <p className="uppercase text-[var(--color-font-primary)] font-[400] tracking-[-0.1em] paragraph">Developer</p>
          </div>
          <div>
            <img src="/kitty.svg" alt="kitty"></img>
          </div>
        </section>
        < Footer />
      </main>
  )
}