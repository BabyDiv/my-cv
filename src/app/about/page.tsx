'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  }

    return (
      <main
        className={`py-[20px] px-[32px] flex flex-col justify-between box-border w-full h-[calc(100vh-20px)] p-6 rounded-[32px] transition-colors duration-500`}
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(to bottom, #121212 0%, #3a3a3a 100%)'
            : 'linear-gradient(to bottom, #E39F74 0%, #E39F74 60%, #E5E5E5 100%)',
        }}
      >

        < Header onToggleTheme={toggleTheme} />
        < AboutContent />
        < Footer />
      </main>
  )
}